var backGround,background_image
var window,window_image
var climber,climber_image
var ghost,ghost_image
var climberGroup,invisibleGroundGroup
var invisibleGround
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload () {
  
  background_image = loadImage("tower.png");
  window_image = loadImage("door.png");
  climber_image = loadImage("climber.png");
  ghost_image = loadImage("ghost-jumping.png");
  
  
  
  
  
}

function setup () {
  
  createCanvas(600,600);
  
  backGround = createSprite(300,300);
  backGround.addImage(background_image);
  backGround.velocityY = 3;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghost_image);  
  ghost.scale = 0.4;
  
  
  invisibleGroundGroup = new Group();
  climberGroup = new Group();



  
  
  
  
  
  
  
}


function draw () {
  
  if (gameState == PLAY ){

   // camera.position.x=ghost.x;
   // camera.position.y=ghost.y;
  
  if (backGround.y > 600){
      backGround.y = 300;
    }
  
  if(keyDown("space") ) {
      ghost.velocityY = -12;
    }
  
   ghost.velocityY = ghost.velocityY + 0.8;
  
  
 if(keyDown("left") ) {
   
   ghost.x =ghost.x  -5;
   
 }
  
   if(keyDown("right") ) {
   
   ghost.x =ghost.x  +5;
   
 }
  
  if(climberGroup.isTouching(ghost)) {
    
    ghost.velocityY = 0;




    
  }
  
  
  
  
  
  spawnDoors();
  
 if(invisibleGroundGroup.isTouching(ghost) || ghost.y > 600){
   
   
   gameState = END
 }
  
  


  
  drawSprites();
}
if (gameState == END){
  
  
  background("black");
  text("GAME OVER", 300,300);
}
}




function spawnDoors () {
if (frameCount % 120 === 0) {
    var window = createSprite(600,-50,40,10);
    window.x = Math.round(random(100,500));
   window.addImage(window_image);
    window.velocityY = 3;
  
   var climber = createSprite(600,10,40,10);
    climber.x = window.x;
   climber.addImage(climber_image);
   climber.velocityY = 3;
  
  window.depth =ghost.depth;
    ghost.depth = ghost.depth + 1;
  
  
  climber.lifetime = 600;
  window.lifetime = 600;
  
  invisibleGround = createSprite(600,15,70,10);
    invisibleGround.x = window.x;
   invisibleGround.visible = false;
  invisibleGround.velocityY = 3;
  
  invisibleGround.lifetime = 600;
  
  
  invisibleGroundGroup.add(invisibleGround);
  climberGroup.add(climber);
  
  
  
  
  
  
}
  
  
}


     
    
