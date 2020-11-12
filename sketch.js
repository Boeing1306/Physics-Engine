const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var ball;

function setup() {
  createCanvas(400,400);

  var ballOptions = {
    restitution : 1
  }

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true

  }

  object = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, object);

  ball = Bodies.circle(100,100,20,ballOptions);
  World.add(world,ball);

  console.log(object);

  console.log(object.type);

  console.log(object.position.x);

  console.log(object.position.y);
  
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  


}