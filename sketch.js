var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1,box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(400,660,100,10);
	box1.shapeColor=color(85)

	box2=createSprite(350,605,10,100);
	box2.shapeColor=color(85)

	box3=createSprite(450,605,10,100);
	box3.shapeColor=color(85)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() { 
    if (keyCode === LEFT_ARROW) { 
	    helicopterSprite.x=helicopterSprite.x-20;
	    translation={x:-20,y:0} 
	    Matter.Body.translate(packageBody, translation) 
    } 
	else if (keyCode === RIGHT_ARROW) 
	{ 
		helicopterSprite.x=helicopterSprite.x+20; 
		translation={x:20,y:0} 
		Matter.Body.translate(packageBody, translation) 
	}
	else if (keyCode === DOWN_ARROW) 
	{
		Matter.Body.setStatic(packageBody,false); } 
}





