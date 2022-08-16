
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redBalloon, pinkBalloon, greenBalloon ,blueBalloon ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score =0;



function preload()
{
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");

  bowImage = loadImage("bow0.png");

  red_balloonImage = loadImage("red_balloon0.png");

  green_balloonImage = loadImage("green_balloon0.png");

  pink_balloonImage = loadImage("pink_balloon0.png");

  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup()
{

  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;

  redGroup= new Group();
  blueGroup= new Group();
  greenGroup= new Group();
  pinkGroup= new Group();
  
  arrowGroup= new Group();
  
}

function draw()
{

 background(0);




 if(gameState === PLAY)
  {

   scene.velocityX = -3 

   if (scene.x < 0)
    {
      scene.x = scene.width/2;
    }
  
   bow.y = World.mouseY
  
   
   if (keyDown("space"))
    {
     createArrow();
    }
  
  
   var select_balloon = Math.round(random(1,4));
  
   if (World.frameCount % 100 == 0)
   {
     switch(select_balloon )
     {
       case 1: redBalloon();
       break;
       case 2:blueBalloon();
       break;
       case 3:pinkBalloon();
       break;
       case 4:greenBalloon();
       break;
       default:
       break;
     }
   }

   if (arrowGroup.isTouching(redGroup))
    {
     redGroup.destroyEach();
     gameState=END; 
    }
  }



  if (gameState === END) 
  {
   bow.destroy();
   scene.velocityX = 0;
  }

 
 if (arrowGroup.isTouching(greenGroup))
 {
  greenGroup.destroyEach()
  arrowGroup.destroyEach()
   score+3
 }

 if (arrowGroup.isTouching(blueGroup))
 {
  blueGroup.destroyEach()
  arrowGroup.destroyEach()
   score+2
 }

 if (arrowGroup.isTouching(pinkGroup))
 {
  pinkGroup.destroyEach()
  arrowGroup.destroyEach()
   score+1
 }


  
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}


function redBalloon()
 {
   var redBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
   redBalloon.addImage(red_balloonImage);
   redBalloon.velocityX = 3;
   redBalloon.lifetime = 150;
   redBalloon.scale = 0.1;
   redGroup.add(redBalloon);
 }

function blueBalloon() 
{
  var blueBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueBalloon.addImage(blue_balloonImage);
  blueBalloon.velocityX = 3;
  blueBalloon.lifetime = 150;
  blueBalloon.scale = 0.1;
  blueGroup.add(blueBalloon);
}

function greenBalloon() 
{
  var greenBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenBalloon.addImage(green_balloonImage);
  greenBalloon.velocityX = 3;
  greenBalloon.lifetime = 150;
  greenBalloon.scale = 0.1;
  greenGroup.add(greenBalloon);
}

function pinkBalloon() 
{
  var pinkBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkBalloon.addImage(pink_balloonImage);
  pinkBalloon.velocityX = 3;
  pinkBalloon.lifetime = 150;
  pinkBalloon.scale = 1
  pinkGroup.add(pinkBalloon);
}


function createArrow()
  {
   var arrow= createSprite(100, 100, 60, 10);
   arrow.addImage(arrowImage);
   arrow.x = 360;
   arrow.y=bow.y;
   arrow.velocityX = -4;
   arrow.lifetime = 100;
   arrow.scale = 0.3;
   arrowGroup.add(arrow);
   
  }
