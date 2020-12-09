
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("pink") 
	bob1 = new Bob(200,600,20,20)
	bob2 = new Bob(240,600,20,20)
	bob3 = new Bob(280,600,20,20)
	bob4 = new Bob(320,600,20,20)
	//bob4 = new Bob(600,600,20,20)
	bob5 =  new Bob(360,600,20,20)
	roof = new Roof(200,400,200,10)
	rope1 = new Rope(bob1.body,roof.body,4*2,0)
	//rope2 = 
	//rope3
	//rope4
	//rope5
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
 bob5.display()
  roof.display()
  rope1.display()
  drawSprites();
 
}



