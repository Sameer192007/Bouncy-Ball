const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundoption={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,groundoption);
  World.add(world,ground);

  var balloption={
    restitution:1.0
  }
  ball=Bodies.circle(190,250,20,balloption);
  World.add(world,ball);
  //console.log(object.position.x);
  //console.log(object.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);

}