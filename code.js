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


var playerPaddle = createSprite(390,200, 10,70);
playerPaddle.shapeColor = "Red";
var computerPaddle = createSprite(10,200,10,70);
computerPaddle.shapeColor = "Blue";
var ball = createSprite(200,200,15,15);
ball.shapeColor = "White";
function drawNet(){
 for(var i = 0; i < 400; i = i + 20)
  line(200,i,200,i+10);
}
 
function draw() {
background("Black");
createEdgeSprites();
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
ball.bounceOff(computerPaddle);
ball.bounceOff(playerPaddle);
if(keyDown("Up")){playerPaddle.y = playerPaddle.y - 30}
if(keyDown("Down")){playerPaddle.y = playerPaddle.y + 30}
computerPaddle.y = ball.y;
if(keyDown("Space")){
ball.velocityX = 15;
ball.velocityY = 15;
ball.x = 200;
ball.y = 200;
 }
 drawSprites();
 drawNet();
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
