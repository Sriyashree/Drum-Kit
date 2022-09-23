//detecting button press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick(){
    var buttonInnerHTML= this.innerHTML; //if a button is pressed, checjk innerHTML of the button, send that to makeSound, to play the relevant sound
    //keyword 'this' here tells us that the button targeted in document.querySelectorAll is the one whose innerHTML we're gonna refer to
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

//detecting keyboard press, or keyboard strokes
document.addEventListener("keydown", function(event){ /*the argument after the string "keydown", is called Callback function. this function
waits for event to occur, then this function gets 'called back' and executed*/
  makeSound(event.key); //if key press is detected, then event.key is sent (info about which key was pressed is sent).
  buttonAnimation(event.key);
}); /*earlier, we used to target specific elements that need to be clicked to trigger the event. But now,
we can just target the entire HTML document to listen to keyboard activity, so as to trigger the event*/

function makeSound(key){
  switch (key) {
    case "w":
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare= new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash= new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default: console.log("press relevant buttons");

  }
}

function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
