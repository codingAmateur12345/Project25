
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, binWall1, binWall2, binWall3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Ball(50,50,70);

ground = new Base(200,880,2000,20);

binWall1 = new binWall(855,655,300,250);



Engine.run(engine);

     
	
}
function draw() {
  rectMode(CENTER);
  background("pink");

paper.display();

ground.display();

binWall1.display();

  keyPressed();

  if(paper.x>755){
MAtter.Body.setStatic(paper, true);
  }

  drawSprites();
 
}
function keyPressed(){
	  if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-505});
}

if(keyCode === DOWN_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:505});
}

	}
	