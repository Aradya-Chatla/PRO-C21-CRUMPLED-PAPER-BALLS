var ball;
var ground, r, l;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 590, 1200, 20);
	l = new Ground(950, 550, 20, 100);
	r = new Ground(1100, 550, 20, 100);
	//Create the Bodies Here.
	var ball_options ={
		isStatic : false,
		restitution : 0,
		friction : 0,
		density : 1.2
	}
	
	ball = Bodies.circle(100, 100, 10, ball_options);
	World.add(world, ball);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);

  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);

  ground.show();
  l.show();
  r.show();
  drawSprites();
}

function keyPressed() {
if (keyIsDown(UP_ARROW)) {
		Matter.Body.applyForce(ball, ball.position, {x:20, y:-20})
}
}