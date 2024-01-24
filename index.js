var drumkeys = document.querySelectorAll(".drum").length;
console.log(drumkeys);
for (var i = 0; i < drumkeys; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
  function handleclick() {
    var buttonclicked = this.innerHTML;
    console.log(buttonclicked);
    animation(this.innerHTML);
    switch (buttonclicked) {
      case "w":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

      default:
        console.log(buttonclicked + " key not defined in the case ");
        break;
    }
  }
}
document.addEventListener("keypress", function keyhandler(event) {
  var buttonPressed = event.key;
  console.log(buttonPressed);
  animation(event.key);
  switch (buttonPressed) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonPressed + " key not defined in the case ");
      break;
  }
});
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  console.log(activeButton);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  },100);
}
