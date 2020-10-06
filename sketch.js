const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var border;
var bgIMG;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload()
{
  bgIMG = loadImage("bg2.jpg");
}

function setup() 
{
  var canvas = createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 780, 480, 20);

  border1 = new Border(240, 0, 480, 20);
  border2 = new Border(0, 400, 20, 800);
  border3 = new Border(240, 800, 480, 20);
  border4 = new Border(480, 400, 20, 800);

  for(var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width - 10; j = j + 50)
  {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() 
{
  if(bgIMG)
    background(bgIMG);  

  Engine.update(engine);  

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }  

  if(frameCount % 40 === 0)
  {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for(var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }

  ground.display();  

  border1.display();
  border2.display();
  border3.display();
  border4.display();

  drawSprites();
}