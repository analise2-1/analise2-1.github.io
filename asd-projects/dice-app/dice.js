$(document).ready(function () {
  
  function makeDot(top, left, elementID, color){
    $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", color)
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .css("border-radius", "20%")
    .appendTo(elementID);
  }

  function rollDie(dieID, color){
    $(dieID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    if (randomNum === 1) {
      makeDot(42, 43, dieID, color); // middle middle
    } else if (randomNum === 2) {
      makeDot(20, 20, dieID, color); // top left
      makeDot(70, 70, dieID, color); // bottom right
    } else if (randomNum === 3) {
      makeDot(20, 20, dieID, color); // top left
      makeDot(70, 70, dieID, color); // bottom right
      makeDot(42, 44, dieID, color); // middle middle
    } else if (randomNum === 4) {
      makeDot(70, 70, dieID, color); // bottom right
      makeDot(20, 20, dieID, color); // top left
      makeDot(20, 70, dieID, color); // bottom left
      makeDot(70, 20, dieID, color); // top right
    } else if (randomNum === 5) {
      makeDot(42, 44, dieID, color); // middle middle
      makeDot(70, 70, dieID, color); // bottom right
      makeDot(20, 20, dieID, color); // top left
      makeDot(20, 70, dieID, color); // bottom left
      makeDot(70, 20, dieID, color); // top right
    } else if (randomNum === 6) {
      makeDot(20, 70, dieID, color);
      makeDot(45, 70, dieID, color);
      makeDot(70, 70, dieID, color);
      makeDot(20, 20, dieID, color);
      makeDot(45, 20, dieID, color);
      makeDot(70, 20, dieID, color);
    }
  }

  function handleClick1(){
    rollDie("#die", "white");
  }
  function handleClick2(){
    rollDie("#die2", "black");
  }

  $("#die").on("click", handleClick1);
  // $("#die2").on("click", handleClick2);

});


