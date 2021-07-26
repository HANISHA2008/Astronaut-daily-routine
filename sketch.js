function preload() {
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadImage("bath2.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  Astronaut = createSprite(300,230);
  Astronaut.addAnimation("sleeping",sleep);
  Astronaut.scale= 0.1;
}

function draw() {
  background(bg); 
  drawSprites();
  textSize(20)
  fill("white");
  text("INSTURCTIONS",20,50);
  text("Up Arrow Key=Brushing",20,70);
  text("Down Arrow Key=Gymming",20,90);
  text("Left Arrow Key=Eating",20,110);
  text("RightArrow Key=Bathing",20,130)
  text("m Key=Moving",20,150);

 edges = createEdgeSprites();
 Astronaut.bounceOff(edges);


  if(keyDown("UP_ARROW")) {
    Astronaut.addAnimation("brushing",brush);
    Astronaut.changeAnimation("brushing");
    Astronaut.y = 200;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")) {
    Astronaut.addAnimation("Gymming",gym);
    Astronaut.changeAnimation("Gymming");
    Astronaut.y = 200;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")) {
    Astronaut.addAnimation("Eating",eat);
    Astronaut.changeAnimation("Eating");
    Astronaut.y = 200;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")) {
    Astronaut.addAnimation("bathing",bath);
    Astronaut.changeAnimation("bathing");
    Astronaut.y = 200;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }
  if(keyDown("m")) {
    Astronaut.addAnimation("Moving",move);
    Astronaut.changeAnimation("Moving");
    Astronaut.velocityX = 1;
    Astronaut.velocityY = 1;
  }
}