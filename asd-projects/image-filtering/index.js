// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
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
  if (x === 1){
    $("#applyReddify").on("click", applyFilter(reddify));
  }else if (x === 2){
    $("#applyDecreaseBlue").on("click", applyFilter(decreaseBlue));
  }else if (x === 3){
    $("#applyIncreaseGreenByBlue").on("click", applyFilter(increaseGreenByBlue));
  }else if (x === 4){
    $("#applyPurpleTint").on("click", applyFilter(purpleTint));
  }else if (x === 5){
    
  }else if (x === 6){
    
  }else if (x === 7){
    
  }else if (x === 8){
    
  }else if (x === 9){
    
  }
  $("#applyVintageFilter").on("click", applyFilter(vintageFilter));
  $("#applyGrayscaleFilter").on("click", applyFilter(grayscaleFilter));
  $("#applyInvertFilter").on("click", applyFilter(invertFilter));
  $("#applySmudgeFilter").on("click", applyFilter(smudgeFilter));
  $("#applyBlurFilter").on("click", applyFilter(blurFilter));

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++){
    for (let j = 0; j < image[i].length; j++){
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
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++){
    for (let j = 0; j < image[i].length; j++){
      if (image[i][j] !== backgroundColor){
        var pixelArray = rgbStringToArray(image[i][j]);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;

      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(number){
  return number < 0 ? 0 : number > 255 ? 255 : number;
}

// TODO 4: Create reddify filter function
function reddify(aPixelArray){
  if (aPixelArray[RED] < 200){
    var amount = 200 - aPixelArray[RED];
    aPixelArray[RED] += amount;
  }
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(aPixelArray){
  aPixelArray[BLUE] -= 50;
  keepInBounds(aPixelArray[BLUE]);
}

function increaseGreenByBlue(aPixelArray){
  let bluePixel = aPixelArray[BLUE];
  let greenPixel = aPixelArray[GREEN]; 
  greenPixel += bluePixel;
  keepInBounds(greenPixel);
  aPixelArray[GREEN] = greenPixel;
}

// CHALLENGE code goes below here
function purpleTint(aPixelArray){
  aPixelArray[RED] += 100;
  keepInBounds(aPixelArray[RED]);
  aPixelArray[BLUE] += 100;
  keepInBounds(aPixelArray[BLUE]);
}

function vintageFilter(){

}

function grayscaleFilter(){

}

function invertFilter(){

}

function smudgeFilter(){

}

function blurFilter(){

}