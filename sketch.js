
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var banana,FoodGroup,obstacle, obstacleGroup;
var score;
var ground;
var invisibleground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400); 

 monkey=createSprite(100,330,101,0);
 monkey.addAnimation("running",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(200,366,800,10); 
 ground.velocityX=-10; 
  ground.x=ground.width/2;
  
 FoodGroup=createGroup();
 obstacelGroup=createGroup(); 
  
 invisibleground=createSprite(200,370,1,1);
  
}


function draw() {
 background(1800);
 
  if(ground.x<0){
     ground.x=ground.width/2; 
  }
  
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-15;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  
  
  
 fruit();
 rock();
  
 drawSprites(); 
}

function fruit(){
  if(frameCount%80===0){
     banana=createSprite(410,Math.round(random(120,200)),1,1);
 banana.addImage("fruit",bananaImage);
 banana.scale=0.1;
 banana.velocityX=-10; 
 banana.lifetime=40;
 FoodGroup.add(banana);   
  }
}

function rock(){
  if(frameCount%300===0){
  obstacle=createSprite(410,345,1,1)
    obstacle.addImage("stone",obstacleImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-3;
    obstacle.collide(invisibleground);
    obstacle.lifetime=120;
    //obstacleGroup.add(obstacle);
  }
}



