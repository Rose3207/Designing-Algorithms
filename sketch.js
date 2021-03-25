var a, b; 

function setup() {
  createCanvas(800,400);
  a = createSprite(200, 100, 50, 50);
    a.shapeColor = "green";
  b = createSprite(400, 200, 50, 50);
    b.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  console.log(b.y-a.y); 
  b.x = World.mouseX; 
  b.y = World.mouseY; 
  if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2 && 
    b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2 ){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}