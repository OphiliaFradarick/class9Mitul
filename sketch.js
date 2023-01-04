var box;

function setup() {
 createCanvas(500,300);

 box = createSprite(250,150, 40, 40);
 box.shapeColor = "yellow";

}

function draw(){
  background("black");

  drawSprites();
}