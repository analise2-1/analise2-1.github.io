$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 200, 100, 10);

    //top
    createPlatform(300, 150, 50, 10);
    createPlatform(500, 200, 50, 10);
    createPlatform(700, 250, 50, 10);
    createPlatform(850, 200, 50, 10);
    createPlatform(1050, 250, 50, 10);
    createPlatform(1200, 150, 50, 10);

    //middle
    createPlatform(200, 300, 50, 10);
    createPlatform(400, 350, 50, 10);
    createPlatform(550, 400, 50, 10);
    createPlatform(650, 460, 50, 10);
    createPlatform(900, 440, 50, 10);
    createPlatform(1100, 380, 50, 10)

    //bottom
    createPlatform(100, 450, 50, 10);
    createPlatform(200, 470, 50, 10);
    createPlatform(350, 500, 50, 10);
    createPlatform(750, 550, 50, 10);



    // Backround
    //createPlatform(250, 650, -100, 30)



    // TODO 3 - Create Collectables

    //top
    createCollectable("database", 500, 160);
    createCollectable("database", 1060, 210);
    createCollectable("database", 650,430);


    
    // TODO 4 - Create Cannons

    createCannon("right", 200, 2000);
    createCannon("right", 400, 2000);
    createCannon("right", 600, 2000);
    createCannon("bottom", 170, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
