
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score 
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
 


function setup() {
  createCanvas(400,370);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
  score=0
}


function draw() {
  background(180);
  text("Score: "+ score, 300,50);
    stroke("white");
    textSize(20);
    fill("white");
  score=Math.ceil(frameCount/frameRate());
  if(keyDown("space") && monkey.y >= 120){
    monkey.velocityY=-3
  }
  
  if(ground.x < 0 ){
    ground.x = ground.width/2;
  }
  monkey.velocityY = monkey.velocityY+ 0.8;
  monkey.collide(ground);
  
  food();
  obstacle();
drawSprites();  
}
function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(370,325,40,10);
    banana.y = Math.round(random(250,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-3;
    banana.lifetime=200;
    FoodGroup.add(banana );
  }
}
function obstacle(){
  if(frameCount % 300 ===0){
    var obstacle = createSprite(600,330,40,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}





