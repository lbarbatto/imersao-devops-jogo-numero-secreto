let numeroMaximo = 100;
let numeroSecreto;

let mensagens = {
    "BoasVindas": "Boas vindas ao jogo do número secreto",
    "Adivinha": "Adivinha?",
    "Digite": `Digite um número de 1 a ${numeroMaximo}`,
    "Maior": "O número secreto é maior do que ",
    "Menor": "O número secreto é menor  do que ",
    "Acertou": "Parabéns!"
};

let tentativas;
let input;

//Elementos do DOM
const trofeu = document.getElementById("trofeu");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const btnStart = document.getElementById("btnStart");
const btnChutar = document.getElementById("btnChutar");
const inputPalpite = document.getElementById("inputPalpite");

//Inicia novo jogo
function iniciarNovoJogo() {
    numeroSecreto = sortearNumeroSecreto(numeroMaximo);
    tentativas = 0;

    // Resetando interface
    trofeu.style.display = "none";
    titulo.textContent = mensagens.Adivinha;
    subtitulo.textContent = mensagens.Digite;

    // Mostrar input e botão de chute
    inputPalpite.style.display = "block";
    btnChutar.style.display = "inline-block";
    inputPalpite.disabled = false;
    btnChutar.disabled = false;

    // Esconder botão iniciar
    btnStart.style.display = "none";

    inputPalpite.value = "";
    inputPalpite.focus();    
}

// /Verifica o palpite
function verificarPalpite() {

  const palpite = Number(inputPalpite.value);
  tentativas++;

  if (!palpite || palpite < 1 || palpite > numeroMaximo) {
    subtitulo.textContent = mensagens.Digite;
    return;
  }

  if (palpite === numeroSecreto) {
    titulo.textContent = mensagens.Acertou
    subtitulo.textContent = `O número era ${numeroSecreto}. Você acertou em ${tentativas} tentativas!`;
    trofeu.style.display = "block";

    jogando = false;
    inputPalpite.disabled = true;
    inputPalpite.style.display = "none";
    btnChutar.disabled = true;
    btnChutar.style.display = "none";
    btnStart.style.display = "block";


  } else if (palpite < numeroSecreto) {
    subtitulo.textContent = mensagens.Maior + palpite;
  } else {
    subtitulo.textContent = mensagens.Menor + palpite;
  }

  inputPalpite.value = "";
  inputPalpite.focus();
}

//Sorteia e retorna um numero aleatório dentro do limite informado
function sortearNumeroSecreto(numeroMaximo) {
  return Math.floor(Math.random() * numeroMaximo) +1;  
}

// Eventos
btnStart.addEventListener("click", iniciarNovoJogo);
btnChutar.addEventListener("click", verificarPalpite);
inputPalpite.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    verificarPalpite();
  }
});





