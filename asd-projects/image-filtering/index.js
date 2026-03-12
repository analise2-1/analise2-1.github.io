// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#reset").on("click", resetAndRender);
});

// var pixelArray = [];

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender(x) {
  // Multiple TODOs: Call your apply function(s) here
  if (x === "applyReddify") {
    $("#applyReddify").on("click", applyFilter(reddify));
  } else if (x === "applyDecreaseBlue") {
    $("#applyDecreaseBlue").on("click", applyFilter(decreaseBlue));
  } else if (x === "applyIncreaseGreenByBlue") {
    $("#applyIncreaseGreenByBlue").on("click", applyFilter(increaseGreenByBlue));
  } else if (x === "applyPurpleTint") {
    $("#applyPurpleTint").on("click", applyFilter(purpleTint));
  } else if (x === "applyVintageFilter") {
    $("#applyVintageFilter").on("click", applyFilter(vintageFilter));
  } else if (x === "applyGrayscaleFilter") {
    $("#applyGrayscaleFilter").on("click", applyFilter(grayscaleFilter));
  } else if (x === "applyInvertFilter") {
    $("#applyInvertFilter").on("click", applyFilter(invertFilter));
  } else if (x === "applySmudgeFilter") {
    $("#applySmudgeFilter").on("click", applyFilter(smudgeFilter));
  } else if (x === "applyBlurFilter") {
    $("#applyBlurFilter").on("click", applyFilter(blurFilter));
  }

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      // console.log(image[i][j]);
      var pixel = image[i][j];
      var pixelArray = rgbStringToArray(pixel);
      // this is where ill modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixelArray = rgbStringToArray(image[i][j]);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(number) {
  return number < 0 ? 0 : number > 255 ? 255 : number;
}

// TODO 4: Create reddify filter function
function reddify(aPixelArray) {
  if (aPixelArray[RED] < 200) {
    var amount = 200 - aPixelArray[RED];
    aPixelArray[RED] += amount;
  }
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(aPixelArray) {
  aPixelArray[BLUE] -= 50;
  keepInBounds(aPixelArray[BLUE]);
}

function increaseGreenByBlue(aPixelArray) {
  let bluePixel = aPixelArray[BLUE];
  let greenPixel = aPixelArray[GREEN];
  greenPixel += bluePixel;
  keepInBounds(greenPixel);
  aPixelArray[GREEN] = greenPixel;
}

// CHALLENGE code goes below here
function purpleTint(aPixelArray) {
  aPixelArray[RED] += 100;
  keepInBounds(aPixelArray[RED]);
  aPixelArray[BLUE] += 100;
  keepInBounds(aPixelArray[BLUE]);
}
         
var currentSquare = image[0][0];
var a = 0;

function vintageFilter(aPixelArray) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (currentSquare === aPixelArray){
        if (a === 0 && j === )
        currentSquare = image[i+1][j+1];
      }
    }
  }
  
  
}

function grayscaleFilter() {}

function invertFilter(aPixelArray) {
  aPixelArray[RED] = 255 - aPixelArray[RED];
  aPixelArray[BLUE] = 255 - aPixelArray[BLUE];
  aPixelArray[GREEN] = 255 - aPixelArray[GREEN];
}

function smudgeFilter() {}

function blurFilter() {}
