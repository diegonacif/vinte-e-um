const cardsSpan = document.getElementById('cards');
const resultSpan = document.getElementById('result');
const actionBtn = document.getElementById('actionBtn');
const player1 = document.getElementById('player1');
const player1Name = localStorage.getItem("name1")
const player2Name = localStorage.getItem("name2")
const min = Math.ceil(1);
const max = Math.floor(13);

// URL DINAMICA
let url;
if (window.location.origin === "https://diegonacif.github.io") {
  url = {   // URL PRODUÇÃO
    player2: "/vinte-e-um/pages/player2/player2.html",
    gameover: "/vinte-e-um/pages/gameover/gameover.html"
  }
} else {  
  url = {   // URL DESENVOLVIMENTO
    player2: "/pages/player2/player2.html",
    gameover: "/pages/gameover/gameover.html"
  }
} 

let cardsArray = []

function setNames() {
  return player1.innerHTML = player1Name
};
window.onload = setNames();

function stopGame() {
  return (
    localStorage.setItem("result1" ,resultSpan.innerHTML),
    window.location.replace(`${window.location.origin}${url.player2}`)
  )
};

function endGame() {  
  if (resultSpan.innerHTML <= 21) {
    return;
  } else {
    return (
    localStorage.setItem("result1" ,resultSpan.innerHTML),
    window.location.replace(`${window.location.origin}${url.gameover}`)    
    )
  }
};

function addCard() {  
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // criando numero randomico
  cardsArray.push(randomNum)
  
  if (resultSpan.innerHTML <= 21) {
    return (
      cardsSpan.innerHTML = cardsArray.toString().replace(/,/g, " - "), // manipulando string
      resultSpan.innerHTML = cardsArray.reduce((a, b) => a + b, 0), // somando itens do array
      endGame()
    );
  } else { return; }
};
