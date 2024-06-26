// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variaveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let velocidadeXOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  circle( xBolinha,yBolinha,diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
  function draw() {
    background(0);
    mostrabolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete,yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
    
function mostrabolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || 
        yBolinha - raio  < 0) {
        velocidadeYBolinha *= -1;
     }
}

function mostraRaquete(x,y){
  rect(x,y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete-= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
   }
}
    
function verificaColisaoRaquete(){
  if (xBolinha < xRaquete + raqueteComprimento 
      && yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
    
function verificaColisaoRaquete(x,y){
  colidiu= collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,
                             yBolinha,raio);

    if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
  }
}
    
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 75;
  yRaqueteOponente += velocidadeYOponente
}

    
function incluiPlacar(){
  fill(225)
   text(meusPontos, 248, 26);
   text(pontosOponente, 341, 26);
}
  
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}}