var box;

function setup() {
  createCanvas(500,500);
box = createSprite(250,250,50,50);
box.shapeColor="white";

}

function draw() 
{
   background(30);

 if (keyIsDown( RIGHT_ARROW)) {
   box.x = box.x +3;
 }else if( keyIsDown(LEFT_ARROW)){
   box.x-=3;
 }

 if(keyDown("up")){
   box.y-=3;
 } else if(keyDown("down")){
   box.y+=3;
 }

if (keyDown("space")) {
  background("yellow")
}else{
  background("blue");
}
  drawSprites();
}




