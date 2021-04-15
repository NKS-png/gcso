var car;
var wall;
var weight;var speed;
var deformation;
function setup() {
  createCanvas(800,400);
  wall=createSprite(600, 200, 50, 90);
  car=createSprite(-20,200,60,20);



  speed = Math.round(random(55,90));
  weight=Math.round(random(400,1500));

  car.velocityX=speed;

  deformation = 0.5 * weight * speed * speed/22500;
}

function draw() {
  background("cyan");  
  if(car.x-wall.x <car.width/2+wall.width/2 && wall.x-car.x <car.width/2+wall.width/2){
  car.velocityX=0 
  if(deformation<100){
    car.shapeColor="yellow";
  }
  if(deformation===100){
    car.shapeColor="red";
  }
  if(deformation>100){
    car.shapeColor="lime";
  }
  }

  drawSprites();
}