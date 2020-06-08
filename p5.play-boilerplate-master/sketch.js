var frect,mrect;

function setup() {
  createCanvas(800,400);
frect= createSprite(200, 200, 50, 50);
mrect= createSprite(600, 200, 50, 50);
frect.velocityX=2;
mrect.velocityX=-2;


}

function draw() {
  background(255,255,255);
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<mrect.width/2+frect.width/2 &&
    mrect.y-frect.y<mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<mrect.height/2+frect.height/2){
    frect.velocityX=frect.velocityX*-1;
    mrect.velocityX=mrect.velocityX*-1;
  } 
  drawSprites();
}