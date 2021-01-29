
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var ground, tree, stone, mango;
var constrainedboy;
var bg;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(750,600,200,200);
	boy = new Boy(300,650,90,200)
	stone1 = new Stone(270,600,30,30)
	mango1 = new Mango(700,600,20)
	mango2 = new Mango(750,550,20)
	mango3= new Mango(720,580,20)
	chain= new Chain(stone1.body,{x:270, y:600});
	ground = new Ground(600,height,1200,20);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(999);
  Engine.update(engine);

  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display()
  mango3.display()
  stone1.display()
  chain.display()
  
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    chain.fly()
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:270, y:600}) 
	  chain.attach(stoneObj.body);
	}
  }
  function detectollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
      if(distance<=lmango.r+lstone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }


  