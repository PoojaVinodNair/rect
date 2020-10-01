var box1 ,box2,box3,box4;
function setup() {
  createCanvas(800,400);
  
  fixedRect= createSprite(400, 200, 30, 80);
  movingRect=createSprite(200,200,80,30);
  box1=createSprite(100,100,50,50);
  box2=createSprite(200,100,50,50);
  box3=createSprite(300,100,50,50);
  box4=createSprite(400,100,50,50);

 
//  movingRect.velocityX=5;
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  box1.shapeColor="green";
  box2.shapeColor="green";
  box3.shapeColor="green";
  box4.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

 if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
  // } else {
  //   fixedRect.shapeColor="green";
  //   movingRect.shapeColor="green";
  }
  if(isTouching(movingRect, box1)){
    box1.shapeColor="red";
   movingRect.shapeColor="red";
  // } else {
  //   box1.shapeColor="green";
  //   movingRect.shapeColor="green";
  }
  if(isTouching(movingRect, box2)){
    box2.shapeColor="red";
   movingRect.shapeColor="red";
  // } else {
  //   box2.shapeColor="green";
  //   movingRect.shapeColor="green";
  }
  if(isTouching(movingRect, box3)){
    box3.shapeColor="red";
   movingRect.shapeColor="red";
  // } else {
  //   box3.shapeColor="green";
  //   movingRect.shapeColor="green";
  }
  if(isTouching(movingRect, box4)){
    box4.shapeColor="red";
   movingRect.shapeColor="red";
  // } else {
  //   box4.shapeColor="green";
  //   movingRect.shapeColor="green";
  }
 
  bounceoff(fixedRect,movingRect);
  drawSprites();
}

