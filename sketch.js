//Trilha Sonora
let raquetada;
let som;
let ponto;


//Posição da Bolinha
let xBolinha = 300;
let yBolinha = 200;
//Tamanho da Bolinha
let diametro = 25;
let raio = diametro / 2 ;
//Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Posição da Raquete
let xRaquete = 5;
let yRaquete = 150;
//Tamanho da Raquete
let comprimentoRaquete = 10;
let alturaRaquete = 90;
//Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
//Colisão
let colidiu = false;

//Placar
let meuPlacar = 0;
let oponentePlacar = 0;

//trilha sonora
function preload() {
    som = loadSound("som.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

//Tamanho da Tela
function setup(){
  createCanvas(600,400);
  som.loop();
}

//Funcionalidades
function draw(){
  background(0);
  mostraBolinha();
  movimetaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  movimentaRaqueteOponente();
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcadorPonto();
  rect(300,0,5,400);
}
//Formulas da Raquete
function mostrarRaquete(x,y){
  fill(255);
  rect(x,y,comprimentoRaquete,alturaRaquete);
}
function movimentaRaquete(){
  if (keyIsDown(87))
  yRaquete -=10;
  if (keyIsDown(83))
  yRaquete +=10;
}

function movimentaRaqueteOponente() {
  if (keyIsDown(UP_ARROW))
  yRaqueteOponente -=10;
  if (keyIsDown(DOWN_ARROW))
  yRaqueteOponente +=10;
}
  
  
//function movimentaRaqueteOponente() {
//    velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
//    yRaqueteOponente += velocidadeYOponente
//}

function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}


  //Formulas da Bolinha
function mostraBolinha (){
  fill(255);
  circle(xBolinha, yBolinha, diametro);
}

function movimetaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;}
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;}
}

//Placar
function incluiPlacar(){
 
  //Retangulo
  fill(color(255,140,0));{
  rect(150,10,40,20);
  fill(color(255,140,0));
  rect(450,10,40,20);}
  stroke(255);

  //texto
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text(meuPlacar, 170, 26);
  text(oponentePlacar, 470, 26);   

}

function marcadorPonto(){
  if (xBolinha >585){
    meuPlacar += 1;
    ponto.play();
  }
  if (xBolinha <15){
    oponentePlacar += 1;
    ponto.play();
}
}