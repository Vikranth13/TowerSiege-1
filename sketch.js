
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
// var kid;
// var tree;
var ground, ground2, ground3;
function preload()
{
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  invisground = new Ground(600,620,1200,20);
  ground = createSprite(600,610,1200,20);
  ground.shapeColor = "brown";

  invisground2 = new Ground(520,455,340,10);
  ground2 = createSprite(505,450,300,10);
  ground2.shapeColor = "brown";

  invisground3 = new Ground(900,305,225,10);
  ground3 = createSprite(900,300,225,10);
  ground3.shapeColor = "brown";

  t1l11 = new BBox(385,300,40,50);
  t1l12 = new BBox(425,300,40,50);
  t1l13 = new BBox(465,300,40,50);
  t1l14 = new BBox(505,300,40,50);
  t1l15 = new BBox(545,300,40,50);
  t1l16 = new BBox(585,300,40,50);
  t1l17 = new BBox(625,300,40,50);

  t1l21 = new PBox(425,250,40,50);
  t1l22 = new PBox(465,250,40,50);
  t1l23 = new PBox(505,250,40,50);
  t1l24 = new PBox(545,250,40,50);
  t1l25 = new PBox(585,250,40,50);

  t1l31 = new GBox(465,200,40,50);
  t1l32 = new GBox(505,200,40,50);
  t1l33 = new GBox(545,200,40,50);

  t1l41 = new BlBox(505,150,40,50);


  t2l11 = new BBox(820,275,40,50);
  t2l12 = new BBox(860,275,40,50);
  t2l13 = new BBox(900,275,40,50);
  t2l14 = new BBox(940,275,40,50);
  t2l15 = new BBox(980,275,40,50);

  t2l21 = new GBox(860,225,40,50);
  t2l22 = new GBox(900,225,40,50);
  t2l23 = new GBox(940,225,40,50);

  t2l31 = new PBox(900,175,40,50);

  p = new Polygon(50,350);


  slingshot = new SlingShot(p.body,{x:50, y:350});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
  ground.display();
  ground2.display();
  ground3.display();
  p.display();
  t1l11.display();
  t1l12.display();
  t1l13.display();
  t1l14.display();
  t1l15.display();
  t1l16.display();
  t1l17.display();

  t1l21.display();
  t1l22.display();
  t1l23.display();
  t1l24.display();
  t1l25.display();

  t1l31.display();
  t1l32.display();
  t1l33.display();

  t1l41.display();

  
  t2l11.display();
  t2l12.display();
  t2l13.display();
  t2l14.display();
  t2l15.display();

  t2l21.display();
  t2l22.display();
  t2l23.display();

  t2l31.display();
  
  textSize(24);
  fill("white");
  text("Drag the polygon and release it, to launch it towards the towers.",300,50);

  textSize(14);
  fill("white");
  text("Press space to get another try!",520,550);
}

 function mouseDragged(){
     Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY});
 }


function mouseReleased(){
       slingshot.fly();
  }

 function keyPressed(){
 	if(keyCode === 32){
 		slingshot.attach(p.body);
	}
 }
