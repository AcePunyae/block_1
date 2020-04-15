const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var box1

var platform

var  slingShot
var h


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,10);
    platform = new Ground(500, height, 300, 170);

    box1 = new BlueBox(500,0,30,30);
    box2 = new PinkBox(500,0,30,30);
    box3= new RedBox(490,0,30,30);
    box5=new BlueBox(200,100,30,30)
    
    box4 = new BlueBox(500,380,30,30);
    
h = new squareLaunch(box1.body,{x:200, y:250});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    h.display();
    

  

  
    platform.display();
        
}

function mouseDragged(){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    h.fly();
}
