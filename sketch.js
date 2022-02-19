var paisagem, paimagem;
var nuvens, nuvensimagem;
var mar, marimagem, paredeinvisivel;
var barco, barco_navegando;

function preload(){

  paimagem=loadImage("fundo.png")

  nuvensimagem=loadImage("nuvens.png")
  
  marimagem = loadImage("mar.png");
  
  barco_navegando = loadAnimation("barco1.png", "barco2.png", "barco3.png");
}

function setup(){
  createCanvas(400,200);
  
  paisagem=createSprite(200, 100, 10, 10);
  paisagem.addImage(paimagem)  
  
  nuvens=createSprite(300, 50, 400, 20);
  nuvens.addImage(nuvensimagem);
  nuvens.scale =1
  nuvens.velocityX=-1

  mar = createSprite(300, 150, 400, 20);
  mar.addImage(marimagem);
  mar.scale = 1
  mar.velocityX = -3;

  paredeinvisivel = createSprite(300, 195, 600, 10);

  paredeinvisivel.visible =false

  barco = createSprite(50, 180, 50, 50);
  barco.addAnimation("barco navegando", barco_navegando);
  barco.scale = 1;
}

function draw() {
  background("blue");

  if (mar.x < 95){
    mar.x = mar.width / 2;
  }

  if (nuvens.x < 0){
    nuvens.x = nuvens.width / 2;
  }

  barco.collide(paredeinvisivel);
    
  drawSprites();

 
}
