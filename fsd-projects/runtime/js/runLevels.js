var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );

      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.addChild(obstacleImage);
    }

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);

      enemy.velocityX = -5;
      enemy.rotationalVelocity = 10;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      };
    }

    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25);
      var greenSquare = draw.rect(50, 50, "green");
      greenSquare.x = -25;
      greenSquare.y = -25;
      reward.addChild(greenSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);

      reward.velocityX = -1;
      reward.rotationalVelocity = 10;
      reward.onPlayerCollision = function () {
        game.changeIntegrity(10);
        reward.fadeOut();
      };
      reward.onProjectileCollision = function () {
        game.increaseScore(100);
        reward.fadeOut();
      };
    }

    function createMarker(x, y) {
      var end = game.createGameItem("end", 25);
      var yellowSquare = draw.rect(50, 50, "yellow");
      yellowSquare.x = -25;
      yellowSquare.y = -25;
      end.addChild(yellowSquare);
      end.x = x;
      end.y = y;
      game.addGameItem(end);

      end.velocityX = -1;
      end.onPlayerCollision = function () {
        startLevel();
        end.fadeOut();
      };
      end.onProjectileCollision = function () {
        startLevel();
        end.fadeOut();
      };
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level["gameItems"];
      var x = 0;
      var y = 0;

      for (var i = 0; i < levelObjects.length; i++) {
        if (levelObjects[i].type === "sawblade") {
          x = levelObjects[i].x;
          y = levelObjects[i].y;
          console.log(x);
          console.log(y);
          createSawBlade(x, y);
        } else if (levelObjects[i].type === "reward") {
          x = levelObjects[i].x;
          y = levelObjects[i].y;
          createReward(x, y);
        } else if (levelObjects[i].type === "enemy") {
          x = levelObjects[i].x;
          y = levelObjects[i].y;
          createEnemy(x, y);
        } else if (levelObjects[i].type === "marker") {
          x = levelObjects[i].x;
          y = levelObjects[i].y;
          createMarker(x, y);
        }
      }
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
