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
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,600,100,20);
    createPlatform(500,500,100,20);
    createPlatform(100,300,100,20);
    createPlatform(600,200,100,20);
    createPlatform(900,100,100,20);
    createPlatform(300,400,100,20);
    createPlatform(300,200,100,20);
    createPlatform(200,700,100,20);
    createPlatform(800,560,100,20);







    // TODO 3 - Create Collectables
   createCollectable("grace", 300,100, 0, 0.7);
   createCollectable("diamond", 300,300, 0, 0.7);
   createCollectable("kennedi", 100,100, 0.8, 0.7);
   createCollectable("database", 600,100, 0, 0.7);
   createCollectable("database", 900,0, 0, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 1300, 900);
    createCannon("right", 300, 2000);
    createCannon("left", 300, 1900);
    createCannon("top", 800,700)
      
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
