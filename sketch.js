

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,500,80);
	bob1 = new Bob(800,550);
	rope1 = new Rope(bob1.body,{x:620,y:200});
	bob2 = new Bob(560,550);
	rope2 = new Rope(bob2.body,{x:560,y:200});
	bob3 = new Bob(500,550);
	rope3 = new Rope(bob3.body,{x:500,y:200});
	bob4 = new Bob(440,550);
	rope4 = new Rope(bob4.body,{x:440,y:200});
	bob5 = new Bob(380,550);
	rope5 = new Rope(bob5.body,{x:380,y:200});
	bob6 = new Bob(320,550);
	rope6 = new Rope(bob6.body,{x:320,y:200});
	bob7 = new Bob(260,550);
	rope7 = new Rope(bob7.body,{x:260,y:200});
	bob8 = new Bob(200,550);
	rope8 = new Rope(bob8.body,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  //World.update(engine);
  
  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  bob6.display();
  rope6.display();
  bob7.display();
  rope7.display();
  bob8.display();
  rope8.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY}); 
} 


