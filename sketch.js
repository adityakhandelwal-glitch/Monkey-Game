//to create variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var bananaGroup
var obstacle
var survivalTime
//to load images
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


//to create sprite
function setup() {
createCanvas(600,600);
    monkey=createSprite(80,300,20,20)
    monkey.addAnimation("running",monkey_running)
    monkey.scale=0.1
    ground=createSprite(400,300,1600,10);
    //to create a grooup of banana 
    bananaGroup=new Group();
    //to create a group of obstacle
    obstacleGroup=new Group();
    survivalTime=0;  
}


function draw() {
  background("white")
  //velocity of the ground
     ground.velocityX=-4
  //if ground is smaller than 0 monkey will not fall
    if (ground.x < 0){
        ground.x = ground.width/2;
    }
  //monkey will collide the ground
    monkey.collide(ground)
  //to jump the monkey
   if(keyDown("space")&& monkey.y >= 250){
   monkey.velocityY=-20;
 }
    //add gravity
    monkey.velocityY=monkey.velocityY+1.5
  Food();
  Obstacles();

drawSprites();
    //to display survivalTime
    textSize(20);
    survivalTime=Math.ceil(frameCount/frameRate())
    text("survivalTime:" + survivalTime,300,70)
 

} 
//function for food
function Food(){
    if(frameCount%80==0){
   banana=createSprite(600,250,20,20)
   banana.y=Math.round(random(120,200))
   banana.addImage(bananaImage);
   banana.scale=0.1
   banana.velocityX=-4;
   banana.lifetime=150;
   bananaGroup.add(banana);
  }
}
//function for obstacle
function Obstacles(){
if(frameCount%300===0){
   obstacle=createSprite(40,280,20,20)
   obstacle.x=Math.round(random(120,200))
   obstacle.addImage( obstacleImage);
   obstacle.scale=0.1
   obstacle.velocityX=-8;
   obstacle.lifetime=18;
   obstacleGroup.add(obstacle)
}
}



