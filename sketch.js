//Declaring constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declaring variables
var groundSprite, paperSprite, d1, d2, d3;
var paperBody;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    
	//Creating paper ball
    paperSprite=new Paper(100,600,30);
	
	//Creating the ground
    groundSprite=createSprite(width/2, height-35, width, 20);
	groundSprite.shapeColor="brown";

    //Creating the dustbin
    d1=createSprite(700,height-95,20,100);
	d1.shapeColor="yellow";
	d2=createSprite(450,height-95,20,100);
	d2.shapeColor="yellow";
	d3=createSprite(570,height-50,250,20);
	d3.shapeColor="yellow";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paperSprite.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:85, y:-85});
	//Matter.Body.setStatic(paperBody, false);
	}
}



