$(document).ready(function () {
  function makeDot(top, left, elementID, color) {
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


  function rollDie(dieID, color) {
    $(dieID).empty();
    var rightWidth = ($(dieID).width()-15);
    var rightHeight = ($(dieID).height()-15);
    var randomNum = Math.ceil(Math.random() * 6);
    if (randomNum === 1) {
      makeDot(rightWidth/2, rightHeight/2, dieID, color); // middle middle 42 43
    } else if (randomNum === 2) {
      makeDot(rightWidth/4, rightHeight/4, dieID, color); // top left
      makeDot(rightWidth/1.25, rightHeight/1.25, dieID, color); // bottom right
    } else if (randomNum === 3) {
      makeDot(rightWidth/4, rightHeight/4, dieID, color); // top left
      makeDot(rightWidth/1.25, rightHeight/1.25, dieID, color); // bottom right
      makeDot(rightWidth/2, rightHeight/2, dieID, color); // middle middle
    } else if (randomNum === 4) {
      makeDot(rightWidth/1.25, rightHeight/1.25, dieID, color); // bottom right
      makeDot(rightWidth/4, rightHeight/4, dieID, color); // top left
      makeDot(rightWidth/4, rightHeight/1.25, dieID, color); // bottom left
      makeDot(rightWidth/1.25, rightHeight/4, dieID, color); // top right
    } else if (randomNum === 5) {
      makeDot(rightWidth/2, rightHeight/2, dieID, color); // middle middle
      makeDot(rightWidth/1.25, rightHeight/1.25, dieID, color); // bottom right
      makeDot(rightWidth/4, rightHeight/4, dieID, color); // top left
      makeDot(rightWidth/4, rightHeight/1.25, dieID, color); // bottom left
      makeDot(rightWidth/1.25, rightHeight/4, dieID, color); // top right
    } else if (randomNum === 6) {
      makeDot(rightWidth/4, rightHeight/1.25, dieID, color);
      makeDot(45, rightHeight/1.25, dieID, color);
      makeDot(rightWidth/1.25, rightHeight/1.25, dieID, color);
      makeDot(rightWidth/4, rightHeight/4, dieID, color);
      makeDot(45, rightHeight/4, dieID, color);
      makeDot(rightWidth/1.25, rightHeight/4, dieID, color);
    }
  }

  function handleClick1() {
    rollDie("#die", "white");
  }
  function handleClick2() {
    rollDie("#die2", "black");
  }

  $("#die").on("click", handleClick1);
  // $("#die2").on("click", handleClick2);
});
