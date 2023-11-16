/* This script contains the code for extras outside of the actual game code */
/* This is the typewriter function to display the message at the begining of the game */
/* I used the spaces in the text line to create a delay  */

let i = 0;
    let txt = 'Welcome !!            Would you like to play a game ?              Press start and Enjoy  !!!!!!!'; 
    let speed = 90; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
 setInterval(myTimer, 1000);



/* This is the function connected to the start button to add and remove elements and class */
$(document).ready(function(){ 

  $("#start").click(function(){ 
    $(".score").css({"display": "flex",  "justify-content": "space-evenly"});
      $("#start").fadeOut(1000); 
      $("#demo").fadeOut(1000); 
      $("#clock, .score, #div2, .rock, .paper, .scissor").show("slow");
      $(".movesleft, h5, h6, .p-count, .c-count, .move").show("slow");
  }); 
/* This is the reset button function to reload the page */
  $(".onoff").click(function(){
    window.location.reload();
  });

});
 
 
/* This is the code for my clock display */
 function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}



/* The function to toggle the background color of the page  */
  myInterval = setInterval(getColor, 500);
function getColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "lightblue" ? "lightseagreen" : "lightblue";
}

/* The function to toggle color and size of the title  */
  myOtherInt = setInterval(setColor, 700);       
function setColor() {
    let y = document.querySelector('.title');
    y.style.color = y.style.color == "orange" ? "black" : "orange";   
    y.style.fontSize = y.style.fontSize == "65px" ? "60px" : "65px";
  }

  /* The function to make the heading under the buttons seem alive */
  mymoveInt = setInterval(myColor, 400);
function myColor() {
    let m = document.querySelector('.move');
    m.style.color = m.style.color == "orange" ? "black" : "orange";
    m.style.fontSize = m.style.fontSize == "22px" ? "20px" : "22px";
  
  }
 
  /* This function stops the background color from changing when you play the game */
function stopColor() {
  clearInterval(myInterval);
}


