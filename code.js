var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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


var HP = 3;
var gameState = "Pre-Game";

var sam = createSprite(50,200,20,20);
sam.shapeColor = "Green";

var car1 = createSprite(125,200,20,20);
car1.shapeColor = "Red";
car1.velocityY = 15;
var car2 = createSprite(200,200,20,20);
car2.shapeColor = "Red";
car2.velocityY = -15;
var car3 = createSprite(275,200,20,20);
car3.shapeColor = "Red";
car3.velocityY = 15;
var car4 = createSprite(350,200,20,20);
car4.shapeColor = "Red";
car4.velocityY = -15;

var limit1 = createSprite(200,100,400,5);
limit1.shapeColor = "Yellow";
var limit2 = createSprite(200,300,400,5);
limit2.shapeColor = "Yellow";

function drawNet()
{
  if(gameState === "Game"){
  fill("Red");
  textSize(12);
  text("HP:"+ HP, sam.x - 10, sam.y - 20);
  }
  
}
function Start(){
  
  gameState = "Game";
}
function draw() {
  background("Gray");
  createEdgeSprites();
  sam.bounceOff(limit1);
  sam.bounceOff(limit2);
  car1.bounceOff(limit1);
  car1.bounceOff(limit2);
  car2.bounceOff(limit1);
  car2.bounceOff(limit2);
  car3.bounceOff(limit1);
  car3.bounceOff(limit2);
  car4.bounceOff(limit1);
  car4.bounceOff(limit2);
  if(gameState === "Game"){
  if(keyDown("Right"))
  {
    sam.x = sam.x + 5;
  }
  if(keyDown("Left"))
  {
    sam.x = sam.x - 5;
  }
  if(keyDown("UP"))
  {
    sam.y = sam.y - 5;
  }
  if(keyDown("Down"))
  {
    sam.y = sam.y + 5;
  }}
  if(sam.isTouching(car1))
  {
    if(sam.x < car1.x){
    sam.x = sam.x - 40;
    }
    if(sam.x > car1.x){
      sam.x = sam.x + 40;
    }
    if(sam.y < car1.y)
    {
      sam.y = sam.y - 40;
    }
    if(sam.y < car1.y)
    {
      sam.y = sam.y + 40;
    }
    
    HP = HP - 1;
  }
  if(sam.isTouching(car2))
  {
    if(sam.x < car2.x){
    sam.x = sam.x - 40;
    }
    if(sam.x > car2.x){
      sam.x = sam.x + 40;
    }
    if(sam.y < car2.y)
    {
      sam.y = sam.y - 40;
    }
    if(sam.y < car2.y)
    {
      sam.y = sam.y + 40;
    }
    
    HP = HP - 1;
  }
  if(sam.isTouching(car3))
  {
    if(sam.x < car3.x){
    sam.x = sam.x - 40;
    }
    if(sam.x > car3.x){
      sam.x = sam.x + 40;
    }
    if(sam.y < car3.y)
    {
      sam.y = sam.y - 40;
    }
    if(sam.y < car3.y)
    {
      sam.y = sam.y + 40;
    }
    
    HP = HP - 1;
  }
  if(sam.isTouching(car4))
  {
    if(sam.x < car4.x){
    sam.x = sam.x - 40;
    }
    if(sam.x > car4.x){
      sam.x = sam.x + 40;
    }
    if(sam.y < car4.y)
    {
      sam.y = sam.y - 40;
    }
    if(sam.y < car4.y)
    {
      sam.y = sam.y + 40;
    }
    
    HP = HP - 1;
  }
  if(keyDown("Space"))
  {
     Start();
  }
  if(HP <= 0)
  {
    sam.destroy();
    gameState = "End";
  }
  drawNet();
  drawSprites();
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
