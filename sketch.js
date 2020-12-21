const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground;

polygon=Bodies.circle(100,400,20);
World.add(world,polygon.body)

function preload(){
  polygon_img=loadImage("polygon.png")
}

function setup() {
  var Canvas=createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

 
  slingshot=new Slingshot(polygon.body,{x:100,y:400});

  box1=new Box(210,225,30,40);
  box2=new Box(225,225,30,40);
  box3=new Box(240,225,30,40);
  box4=new Box(255,225,30,40);
  box5=new Box(270,225,30,40); 

  box6=new Box(225,205,30,40);
  box7=new Box(240,205,30,40);
  box8=new Box(255,205,30,40);

  box9=new Box(240,185,30,40);

  box10=new Box(195,245,30,40);
  box11=new Box(210,245,30,40);
  box12=new Box(225,245,30,40);
  box13=new Box(240,245,30,40);
  box14=new Box(255,245,30,40);
  box15=new Box(270,245,30,40);
  box16=new Box(285,245,30,40);

  ground=new Ground(480,520,300,20);

 

}

function draw() {
  background("darkgreen");

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  Engine.update(engine);

  
 
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
ground.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}