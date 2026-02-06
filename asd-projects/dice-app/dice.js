$(document).ready(function () {
  
  function makeDot(top, left, elementID){
    $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("display", "flex")
    // .css("position", "relative")
    // .css("aligne-self", "center")
    .css("column-gap", top)
    .css("row-gap", left)
    .css("border-radius", "20%")
    .appendTo(elementID);
  }

  function rollDie(dieID){
    $(dieID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    if (randomNum === 1) {
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(50, 50, dieID); // middle middle
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(25, 75, dieID);
      makeDot(50, 75, dieID);
      makeDot(75, 75, dieID);
      makeDot(25, 25, dieID);
      makeDot(50, 25, dieID);
      makeDot(75, 25, dieID);
    }
  }

  function handleClick(){
    rollDie("#die")
  }

  $("#die").on("click", handleClick);

});


