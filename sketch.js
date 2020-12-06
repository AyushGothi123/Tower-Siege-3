var a,standObject,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,polygon_img;
const Engine = Matter.Engine,
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world,score;
var standObject,slingshot;
var circles=[];

function preload(){
  polygon_img = loadImage("polygon.png");



}

function setup() {
  createCanvas(800,800);
  stroke(255)

  
  standObject=new Stand(width/2,600,width,20);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

 polygon = Bodies.circle(50,200,20)

 World.add(world,polygon)
 imageMode(CENTER)
 image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  
  slingshot = new Slingshot(this.polygon,{x:100,y:200})


  

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
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  text("SCORE:"+score,750,40)
  background(0);
  standObject.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();

  block16.score();



    
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPress(){
  if (keyCode===32) {
    slingshot.attach(this.polygon);
    
  }




}

function score(){
  if(this.Visiblity<0 && this.Visiblity>-105){
    score++;



  }



}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/NorthAmerica/Montreal");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        background("yellow")
    }
    else{
        background("black")
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}