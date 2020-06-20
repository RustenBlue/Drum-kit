for (i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clicked);
}


function clicked() {
  var buttonHtml = this.innerHTML;
  makeSound(buttonHtml);
  buttonAnimation(buttonHtml);
}

document.addEventListener("keydown", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-1.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/tom-2.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("sounds/tom-4.mp3");
      audio6.play();
      break;
    default:
  }
}

function buttonAnimation(element){
  var button = document.querySelector("."+element);
  button.classList.add("pressed");
  setTimeout(function functionName() {
    button.classList.remove("pressed");}, 100);
}
