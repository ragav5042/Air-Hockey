var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5958db8b-88c7-48ee-b8d4-20b69a235985","48acb758-4412-4812-a7b9-62056a712bb6","5db01180-e0f6-4418-907e-b31d77cc2b0a","eca497ac-9188-48b0-8da8-7862bdabf129"],"propsByKey":{"5958db8b-88c7-48ee-b8d4-20b69a235985":{"name":"b.png_1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"J5WfaV7DX3s5IPNxL3J_hbySTYWvUXSl","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/5958db8b-88c7-48ee-b8d4-20b69a235985.png"},"48acb758-4412-4812-a7b9-62056a712bb6":{"name":"n.jpg_1","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jcvj2fEbJkpXF1SN_OssO5hWgLZzC8dP","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/48acb758-4412-4812-a7b9-62056a712bb6.png"},"5db01180-e0f6-4418-907e-b31d77cc2b0a":{"name":"ne.png_1","sourceUrl":null,"frameSize":{"x":300,"y":171},"frameCount":1,"looping":true,"frameDelay":12,"version":"W2nDWOcQj8Pdcrn_TeoqgBUf6cfQAmFV","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":171},"rootRelativePath":"assets/5db01180-e0f6-4418-907e-b31d77cc2b0a.png"},"eca497ac-9188-48b0-8da8-7862bdabf129":{"name":"ne.png_2","sourceUrl":null,"frameSize":{"x":300,"y":171},"frameCount":1,"looping":true,"frameDelay":12,"version":"CwyMYGfexug3S50Bgn_PpJUzaVrczye_","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":171},"rootRelativePath":"assets/eca497ac-9188-48b0-8da8-7862bdabf129.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;


var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";

// Creating Score
var computerScore=0; 
var playerScore=0;

// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

// Creating states
var gameState="serve";

function draw() {
  //clear the screen
  background("green");
  
striker.setAnimation("b.png_1");
striker.scale=0.4;
goal1.setAnimation("ne.png_1");
goal1.scale=0.3;
goal2.setAnimation("ne.png_2");
goal2.scale=0.3;
 
// gamestates
if(gameState=="serve"){
    fill("Yellow")
    textSize(23);
    text("Press Space to Strike",100,180);
  if(keyDown("space")){
    serve();
    gameState="play";
  }
  
} 
 if (gameState=="play"){ 
  //make the player paddle move with the Arrow keys
  paddleMovement();
  
   
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;
  if(computerScore ==5 || playerScore==5){
    gameState="end"
  }
  
}

if (gameState=="end"){
  
    stroke("yellow");
  fill("red");
  textSize(25);
  text("Game Over",140,225) ;
   
}
  //serve the striker when space is pressed

              
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  
  // displaying Score
  if (striker.isTouching(goal2)){
  playerScore=playerScore+1;
  striker.x=200;
  striker.y=200;
  striker.velocityX=0;
  striker.velocityY=0;
  computerMallet.x=200
  playerMallet.x=200;
  playerMallet.y=50;
  computerMallet.y=350
  if (playerScore<5){
    gameState="serve"
  }
  
  } 
 if (striker.isTouching(goal1)){
   
  computerScore=computerScore+1;
  striker.x=200;
  striker.y=200;
  striker.velocityX=0;
  striker.velocityY=0;
  computerMallet.x=200
  playerMallet.x=200;
  playerMallet.y=50;
  computerMallet.y=350
  if (computerScore < 5)
  {
     gameState="serve"
  }
 
  }

  
  stroke("green");
  fill("red");
  textSize(25);
  text(computerScore,19,240) ;

  
  stroke("green"); 
  fill("red");
  textSize(25);
  text(playerScore,19,180) ;
  if(computerScore===5){
    
  striker.setVelocity(0,0);
  }
  
  
  

  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  
  
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  striker.bounceOff(goal1);
  striker.bounceOff(goal2);
  
  playerMallet.bounceOff(edges);
  playerMallet.bounceOff(goal1);
  computerMallet.bounceOff(edges);
  

 
  
  
  
 
  drawSprites();
}






function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
