const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState,PLAY,END;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    PLAY =0;
    END = 1;
    gameState = PLAY;

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,540);
 text("500",110,540);
 text("500",190,540);
 text("500",250,540);
 text("100",330,540);
 text("100",410,540);
 text("200",490,540);
 text("200",570,540);
 text("200",650,540);
 text("200",730,540);
  Engine.update(engine);
 
  if(gameState === END){
    textSize(100);
    fill("turquise");
    text("GAME OVER",100,400);

  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }


  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
   
   if(particle != null){
      particle.display();
     if(particle.body.position.y >760){
        
      if(particle.body.position.x <300){
        score = score+500;
        particle = null;
        if(turn >= 5) gameState = END;
      }
     }
   }
   if(particle != null){
    particle.display();
   if(particle.body.position.y >760){
      
    if(particle.body.position.x > 300 && particle.body.position.x < 460){
      score = score+100;
      particle = null;
      if(turn >= 5) gameState = END;
    }
   }
 }
 if(particle != null){
  particle.display();
 if(particle.body.position.y >760){
    
  if(particle.body.position.x > 460 && particle.body.position.x < 780){
    score = score+200;
    particle = null;
    if(turn >= 5) gameState = END;
  }
 }
}
}



function mousePressed(){
  if(gameState !== END){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}