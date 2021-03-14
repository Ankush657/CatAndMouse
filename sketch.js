var cat;
var catImg1, catImg2, catImg3;
var mouse;
var mouseImg1, mouseImg2, mouseImg3;
var ground, groundImg;

function preload() {
    //load the images here
    groundImg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup() {
    createCanvas(1000,800);
    //create tom and jerry sprites here
    ground = createSprite(500, 400);
    ground.addImage(groundImg);
    
    cat = createSprite(700, 600, 10, 10);
    cat.addAnimation("running",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(100, 600, 10, 10);
    mouse.addAnimation("teasing", mouseImg1);
    mouse.scale = 0.18;
}

function draw() {

    background(255);

    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2) {
        cat.velocityX = 0;
        cat.addAnimation("cuteCat", catImg3);
        cat.changeAnimation("cuteCat");
        cat.x = mouse.x + 110;

        mouse.addAnimation("spyMouse", mouseImg3);
        mouse.changeAnimation("spyMouse");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseRunning", mouseImg2);
    mouse.changeAnimation("mouseRunning");
  }
}