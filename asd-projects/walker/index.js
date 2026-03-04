/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects 
  //caps mean keyboard and non caps mean arrows
  const key = {enter: 13, LEFT: 65, left: 37, UP: 87, up: 38, RIGHT: 68, right: 39, down: 83, DOWN: 40};
  var walker = {x: 0, y: 0, speedX: 0, speedY: 0};
  var sidesWasPressed = false;
  var heightWasPressed = false;
  var boardWidth =  $("#board").width() - $("#walker").width();
  var boardHeight = $("#board").height() - $("#walker").height();

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);   
  $(document).on('keyup', handleKeyUp);                      

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    // console.log(walker.speedX, walker.speedY);
    wallCollision();
    redrawGameItem();

  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    // console.log(event.which);
    if (event.which === key.left || event.which === key.LEFT){
      // console.log("left pressed");
      walker.speedX = -5;
      sidesWasPressed = true;
    }
    else if (event.which === key.right || event.which === key.RIGHT){
      // console.log("right pressed");
      walker.speedX = 5;
      sidesWasPressed = true;
    }
    else if (event.which === key.down || event.which === key.DOWN){
      // console.log("down pressed");
      walker.speedY = 5;
      heightWasPressed = true;
    }
    else if (event.which === key.enter){
      // console.log("enter pressed");
      var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
      });
      $("#walker").css("background-color", randomColor);
    }
    else if (event.which === key.up || event.which === key.UP){
      // console.log("up pressed");
      walker.speedY = -5;
      heightWasPressed = true;
    }
  }

  function handleKeyUp(event){
    if (sidesWasPressed === true){
      sidesWasPressed = false;
      walker.speedX = 0;
    }
    else if(heightWasPressed === true){
      heightWasPressed = false;
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
    walker.x += walker.speedX;
    walker.y += walker.speedY;
  }

  function redrawGameItem(){
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
    // console.log("Walker position:", walker.x, walker.y);
  }

  function wallCollision(){
    if (walker.x < 0){
      walker.x += 5;
    }
    else if (walker.x > boardWidth){
      walker.x -= 5;
    }
    else if (walker.y < 0){
      walker.y += 5;
    }
    else if (walker.y > boardHeight){
      walker.y -= 5;
    }
  }

  // function spawnEnemies() {

  // }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
