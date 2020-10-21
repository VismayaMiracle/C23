const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box1,Box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Box1=new BOX(220,100,50,50)

    Box2=new BOX(200,300,50,50)

    ground= new Ground(200,350,400,30)
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    Box1.display()
    Box2.display()
    ground.display()

}