const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2;
var box,boxinv;
var player;
var station;
var platformlvl2,platform2lvl2,platform3lvl2,platform4lvl2;
var play;
var Lvl2Button;
var deliveryboyimg,boximg;
var jumpSound;
var level2Platforms;

var gamestate = "start";

function preload(){
  deliveryboyimg = loadImage("Delivery Boy.png");
  boximg = loadImage("Box.jpg");
  jumpSound = loadSound("Jump13.wav");
}


function setup() {
  createCanvas(1200,600);

  setstart();
  setlevel1();
  
}

function draw(){
  background("white");

 if(gamestate==="start"){

   textSize(100)
  fill("purple")
        text(" The Parcel Game",350,400) 
        text.visible=true
       
  startstate();
}
drawSprites();
  if(gamestate==="level1"){
    playlevel1();
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+5;
    }
    if(keyDown(LEFT_ARROW)){
      player.x = player.x - 5;
    }
    if(keyDown("space") && player.y >= 520  ){
      player.velocityY =  - 10;
      jumpSound.play();
    }
    player.velocityY = player.velocityY + 0.5; 
  
  }
 
  if(gamestate==="level2"){
    textSize(50)
    player.destroy();
    box.destroy();
    boxinv.destroy(); 
    
    playLevel2();

    if(keyDown(RIGHT_ARROW)){
      player2.x = player2.x+5;
    }
    if(keyDown(LEFT_ARROW)){
      player2.x = player2.x - 5;
    }
    
    player2.velocityY = player2.velocityY + 0.5; 

    if(player2.y == 523 || player2.y == 453 || player2.y ==378 || player2.y == 303 || player2.y == 178 || player2.y ==520.5){

      if(keyDown("space")){
      player2.velocityY =  - 10;
      jumpSound.play();
      }
    }
                                                                                               
  }
  }
  function setstart(){
  
  play=createSprite(500,500,50,50)

  
}
function startstate(){


  if(mousePressedOver(play)){
    
    clear();
    gamestate="level1";
  }
}
function setlevel1()
{
  player = createSprite(200,530,40,40);
  player.addImage(deliveryboyimg);
  player.scale = 0.3;
  player.setCollider("rectangle",0,0,100,250);
  player.visible=false

  box = createSprite(700,540,40,40);
  box.visible=false;
  box.addImage(boximg);
  box.scale = 0.2;
  box.debug=true;
  box.setCollider("rectangle",0,0,250,250)

  boxinv= createSprite(725,540,10,40);
  boxinv.visible=false;

  
  station = createSprite(900,570,200,20);
  station.shapeColor = "red";
  station.visible=false;
  station.setCollider("rectangle",0,0,200,25);
  ground = createSprite(400,570,800,20);
  ground.visible=false;
  ground2 = createSprite(1100,570,200,20);

  Lvl2Button = createSprite(400,400,30,30);
  Lvl2Button.visible=false;
 ground2.visible=false; 

  

}
function playlevel1(){
  player.visible=true;
 box.visible=true;
 station.visible=true;
  ground.visible=true
  ground2.visible=true;
  play.visible=false;
  
 if(box.isTouching(station)){
  textSize(20);
  fill("black");
  text("You  Delivered The Parcel !",600,400);
  Lvl2Button.visible = true;
 
  if(mousePressedOver(Lvl2Button)){
    gamestate = "level2"
    setLevel2();  
    Lvl2Button.destroy();
  }
 }  
  player.collide(ground);
  player.collide(station);
  player.collide(ground2);

  console.log(player.y);

  if(player.isTouching(box))
  {
    box.x=box.x+5
    boxinv.x=boxinv.x+5
    }
    if(player.isTouching(boxinv))
    {
      box.x=box.x-5
      boxinv.x=boxinv.x-5
      }
}

function setLevel2(){

  platformlvl2 = createSprite(400,500,30,20);
  platformlvl2.visible = false;
  platform2lvl2 = createSprite(550,425,30,20);
  platform2lvl2.visible = false;
  platform3lvl2 = createSprite(700,350,30,20);
  platform3lvl2.visible = false;
  platform4lvl2 = createSprite(850,225,70,20);
  platformlvl2.visible = false;
  
  player2 = createSprite(200,530,40,40);
  player2.visible=false;
  player2.addImage(deliveryboyimg);

  player2.scale=0.3;
  player2.setCollider("rectangle",0,0,100,250);

  box2 = createSprite(850,200,40,40);
  box2.visible=false;
  boxinv2= createSprite(870,200,10,40);
  box2.addImage(boximg);
  box2.scale = 0.2;
  boxinv2.visible=false;
  box2.debug=true;
  box2.setCollider("rectangle",0,0,250,250);

  level2Platforms = [platformlvl2,platform4lvl2,platform2lvl2,platform3lvl2,ground,ground2,station];
}

function playLevel2(){
  player2.visible=true;
  box2.visible=true;
  station.visible=true;
  ground.visible=true
  ground2.visible=true;
  platformlvl2.visible=true;
  platform2lvl2.visible=true;
  platform3lvl2.visible=true;
  platform4lvl2.visible=true;

  console.log(player2.y)

  
  
 if(box2.isTouching(station)){
  textSize(20);
  fill("black");
  text("You  Delivered The Parcel !",600,400);
 }

  Lvl2Button.visible = false;
  player2.collide(ground);
  player2.collide(station);
  player2.collide(ground2);
  player2.collide(platformlvl2);
  player2.collide(platform2lvl2);
  player2.collide(platform3lvl2);
  player2.collide(platform4lvl2);
  box.collide(platform4lvl2);
  boxinv.collide(platform4lvl2);
  box2.collide(platform4lvl2);
  boxinv2.collide(platform4lvl2);
  box2.collide(station);
  boxinv2.collide(station);
  box2.collide(ground2);
  boxinv2.collide(ground2);
  box2.collide(ground);
  boxinv2.collide(ground);

  box2.velocityY = 10;
  boxinv2.velocityY = 10;

  if(player2.isTouching(box2))
  {
    box2.x=box2.x+5
    boxinv2.x=boxinv2.x+5
    }
  if(player2.isTouching(boxinv2))
    {
      box2.x=box2.x-5
      boxinv2.x=boxinv2.x-5
      }

      
  
}
