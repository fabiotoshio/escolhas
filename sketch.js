let suaidade;
let corpo;
let genero;
let titulo;
let Ação;
let Comédia;
let Drama;
let filmes = {
menor10:{
  Ação: "Homem aranha aranha-verso",
  Comédia: "Pet's 2",
  Drama: "Rei leão"
},
  entre10e14: {
    Ação: "Spy Kids",
    Comédia: "Diario de um banana",
    Drama: "A hisotria sem fim"
},
entre14e16: {
  Ação: "os vingadores",
  Comédia: "quero matar meu chefe",
  Drama: "procurando nemo"
},
  entre16e18:{
    Ação: "mad max:estrada da furia ",
    Comédia: "Super bad",
    Drama: "o lado bom da vida"
  },
  maior18:{
    Ação:"Jhon wick",
    Comédia: "bad boys ate o fim",
    Drama: "o impossivel"
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100, 100);
  titulo = "Space Grotesk";
  corpo = "Lustria";
  genero = "Cormorant Garamond";
  createSpan("Qual a sua idade?🐣").position(580, 530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  Ação = createCheckbox("Você gosta de filmes de ação?🧨").position(100, 600).addClass("esconde");
Comédia = createCheckbox("Você gosta de filmes de Comédia?✨").position(100, 650).addClass("esconde");
   Drama = createCheckbox("Você gosta de filmes de Drama?😉").position(100, 700).addClass("esconde");
  
  botao = createButton("APERTA MEU BOTÃO😑").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkAção = Ação.checked();
  let checkComédia = Comédia.checked();
  let filme = "Insira suas preferências"
  let checkDrama = Drama.checked();
  if (suaidade.value() !==""){
    filme = mostrafilme(idade, checkAção, checkComédia, checkDrama);
}
 fill("black") ;
  textAlign(CENTER, CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE FILMES 2024",width/2, 30);
fill("black");
stroke("white");
textAlign(CENTER,CENTER);
textSize(40);
text(filme, width/2, height/2);
  textFont(corpo);
  


}

function mostrafilme(idade, checkAção, checkComédia, checkDrama){
  if (isNaN(idade)){
  return "Idade Inválida"
}
  if (idade < 5){
    return "vaza vai brincar fih"
} else
  if (idade > 120){
    return "Já morreu,enterra🐔"
  }
  if (idade >=5 && idade < 10){
    if (checkAção){
      return filmes["menor10"]["Ação"];
}
    if (checkComédia){
      return filmes["menor10"]["Comédia"];
}
    if (checkDrama){
      return filmes["menor10"]["Drama"];
}
  }
   else if (idade >=10 && idade < 14){
    if (checkAção){
      return filmes["entre10e14"]["Ação"];
}
    if (checkComédia){
      return filmes["entre10e14"]["Comédia"];
}
    if (checkDrama){
      return filmes["entre10e14"]["Drama"];
}
  }
   else if (idade >=14 && idade < 16){
    if (checkAção){
      return filmes["entre14e16"]["Ação"];
}
    if (checkComédia){
      return filmes["entre14e16"]["Comédia"];
}
    if (checkDrama){
      return filmes["entre14e16"]["Drama"];
}
  }
 else if (idade >=16 && idade < 18){
    if (checkAção){
      return filmes["entre16e18"]["Ação"];
}
    if (checkComédia){
      return filmes["entre16e18"]["Comédia"];
}
    if (checkDrama){
      return filmes["entre16e18"]["Drama"];
}
  }
   else if (idade >=18){
    if (checkAção){
      return filmes["maior18"]["Ação"];
}
    if (checkComédia){
      return filmes["maior18"]["Comédia"];
}
    if (checkDrama){
      return filmes["maior18"]["Drama"];
}
  } return "coloca alguma coisa";
 }


