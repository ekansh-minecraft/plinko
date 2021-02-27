const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Constraint = Matter.Constraint;

var engine, world;

var divisions = []
var plinkos = []
var particles = []

var divisionHeight = 300


var ground

var width = 600

var particles = []




function preload() {
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    
    for(var k = 50; k <500; k = k + 50)
    {
        divisions.push(new Division(k, 800-divisionHeight/2, 10, divisionHeight));
    } 

    for(var x = 40; x <=460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,310))
    }

    for(var x = 15; x <=510 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,350))
    }
    for(var x = 40; x<=460 - 10; x=x+50)
    {
        plinkos.push(new Plinko(x,390))
    }
    for(var x = 15; x<=510 - 10; x=x + 50)
    {
        plinkos.push(new Plinko(x,430))
    }


    ground = new Ground(250,795,410,10)
}

function draw(){
    imageMode(CENTER)
    background("black") 

    ground.display()
               
    for(var k=0; k<divisions.length; k++) {
        divisions[k].display()
    }

    for(var x =0; x <plinkos.length; x = x + 1) 
    {
        plinkos[x].display()
    }
    for(var x = 0; x <plinkos.length; x = x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x + 1)
    {
        plinkos[x].display()
    }
    for(var x = 0; x<plinkos.length; x=x +1)
    {
        plinkos[x].display()
    }

    spawnParticle()
   
    
    Engine.update(engine);
}
function spawnParticle()
{
  console.log(frameCount)
        if(frameCount%60 ==0)
        {
            console.log("This button is preesed")
            particles.push(new Particle(random(width/2 - 10,width/2 + 10), 10,10));
        }
        for(var j = 0; j<particles.length; j++)
        {
            particles[j].display();
        }

}
