var iss, spacecraft;
var hasDocked = false;
var bg,issImg,  spaceImg1, spaceImg2, spaceImg3, spaceImg4;

function preload(){
  bg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  spaceImg1=loadImage("spacecraft1.png");
  spaceImg2=loadImage("spacecraft2.png");
  spaceImg3=loadImage("spacecraft3.png");
  spaceImg4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(2000,1000);
  spacecraft=createSprite(750,500);
  //createSprite(400, 200, 50, 50);
  spacecraft.addImage(spaceImg1);
  spacecraft.scale=0.4

  iss=createSprite(1000,300);
  iss.addImage(issImg);
 // iss.scale=0.8

}

function draw() {
  background(bg); 
  spacecraft.addImage(spaceImg1);
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if (keyDown ("UP_ARROW")){
      spacecraft.y-=2;
      spacecraft.addImage(spaceImg2);
    }
    if (keyDown ("DOWN_ARROW")){
      spacecraft.y+=2;
      spacecraft.addImage(spaceImg1);
    }
    if (keyDown ("LEFT_ARROW")){
      spacecraft.x-=2;
      spacecraft.addImage(spaceImg4);
    }
    if (keyDown ("RIGHT_ARROW")){
      spacecraft.x+=2;
      spacecraft.addImage(spaceImg3);
    }
  } 
  if(spacecraft.x >=939 && spacecraft.y <=406 ){
    hasDocked=true;
    textSize(30);
    fill("white");
    text("Docking Success",950,500);
  
  }
  drawSprites();
  console.log(iss.x,iss.y);
}