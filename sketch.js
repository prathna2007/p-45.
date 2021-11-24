var gameState = "level1"
var bgImage;
var ground;
var alice, aliceImg;
var obstacle

function preload() {
  bgImage = loadImage("images/Bg.jpg")
}
function setup() {
  createCanvas(800, 400);

  alice = createSprite(100, 360, 20, 20)

  ground = createSprite(400, 380, 1300, 20)
  ground.velocityX = -3


}


function draw() {
  if (gameState === "level1") {
    background("blue");
    textSize(25);
    fill("yellow")
    strokeWeight(3)
    stroke("red")
    text("ALICE IN WONDERLAND !!", 200, 200)
    text("SAVE ALICE FROM THE MONSTER AND COLLECT CANDIES", 50, 230)
    fill("red")
    textSize(20)
    text("Press SPACE to start the game", 360, 350)
    ground.visible = 0;
    alice.visible = 0;

    if (keyDown("space")) {
      gameState = "level2"
    }

  }

  if (gameState === "level2") {
    background(bgImage)
    ground.visible=0;
    alice.visible=1;


    if (ground.x < 0) {
      ground.x = ground.width / 2
    }

    if (keyDown("k")) {
      alice.velocityY = -3;
    }

    alice.velocityY = alice.velocityY + 0.5;
    alice.collide(ground)

    spawnObstacles();
  }


  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(750, 340, 20, 20)
    obstacle.velocityX = -3
  }
}