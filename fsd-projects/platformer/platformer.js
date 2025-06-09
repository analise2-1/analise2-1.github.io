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

    /*
    ideas: lion king maybe idk
    -level 1:
      -save everyone(the cast) from monkeys
      -get to place at end
    -level 2:
      -get the wood to make bridge
    -level 3:
      -get past big group of monkeys
    -level 4:
      -the people thank you and you get a bunch of money
      -restarts when button click
    */

    
    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 200, 100, 10, "green");

    //top
    createPlatform(300, 150, 50, 10, "green");
    createPlatform(500, 200, 50, 10, "green");
    createPlatform(700, 250, 50, 10, "green");
    createPlatform(850, 200, 50, 10, "green");
    createPlatform(1050, 250, 50, 10, "green");
    

    //middle
    createPlatform(200, 300, 50, 10, "green");
    createPlatform(400, 350, 50, 10, "green");
    createPlatform(550, 400, 50, 10, "green");
    createPlatform(650, 460, 50, 10, "green");
    createPlatform(900, 440, 50, 10, "green");
    createPlatform(1100, 380, 50, 10, "green");

    //bottom
    createPlatform(100, 450, 50, 10, "green");
    createPlatform(200, 470, 50, 10, "green");
    createPlatform(350, 500, 50, 10, "green");
    createPlatform(750, 550, 50, 10, "green");
    createPlatform(550, 550, 50, 10, "green");



    // Backround
    //createPlatform(250, 650, -100, 30)



    // TODO 3 - Create Collectables
    
    if (sessionStorage.getItem("level") === "0"){
      //bear
      createCollectable("max", 500, 160);
      //main guy
      createCollectable("kennedi", 200, 430);
      //panther
      createCollectable("grace", 650, 420);
    }else if (sessionStorage.getItem("level") === "1"){
      //vines
      createCollectable("wood", 500, 160);
      createCollectable("wood", 650, 420);
      createCollectable("wood", 100, 410);
      createCollectable("wood", 1100, 340);
    }

    
    // TODO 4 - Create Cannons
    /*
    createCannon("right", 200, 2000);
    createCannon("right", 400, 3000);
    createCannon("right", 600, 4000);
    createCannon("bottom", 170, 2000);
    createCannon("bottom", 650, 2000);
    createCannon("bottom", 1050, 2000);
    createCannon("top", 950, 2000);
    createCannon("top", 450, 2000);
    */
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
