const cardsSpan = document.getElementById('cards');
const resultSpan = document.getElementById('result');
const actionBtn = document.getElementById('actionBtn');
const player2 = document.getElementById('player2');
const player1Name = localStorage.getItem("name1")
const player2Name = localStorage.getItem("name2")
const min = Math.ceil(1);
const max = Math.floor(13);

// URL DINAMICA
let url;
if (window.location.origin === "https://diegonacif.github.io") {
  url = "/vinte-e-um/pages/gameover/gameover.html"; //URL PRODUÇÃO
} else {  
  url = "/pages/gameover/gameover.html"; // URL DESENVOLVIMENTO
}

let cardsArray = []

function setNames() {
  return player2.innerHTML = player2Name
};
window.onload = () => {
  setNames();
  document.title = player2Name
}

function stopGame() {
  return (
    localStorage.setItem("result2" ,resultSpan.innerHTML),
    window.location.replace(`${window.location.origin}${url}`)
  )  
}

function endGame() {  
  if (resultSpan.innerHTML <= 21) {
    return;
  } else {
    return (
      localStorage.setItem("result2" ,resultSpan.innerHTML),
      window.location.replace(`${window.location.origin}${url}`)
    )
  }
};

function bestGame() {
  const resultSpan = document.getElementById('result');

  if (resultSpan.innerHTML === '21') {
    return resultSpan.style.color = 'gold';
  } else {
    return;
  }
}

function addCard() {  
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // criando numero randomico
  cardsArray.push(randomNum)
  
  if (resultSpan.innerHTML <= 21) {
    return (
      cardsSpan.innerHTML = cardsArray.toString().replace(/,/g, " - "), // manipulando string
      resultSpan.innerHTML = cardsArray.reduce((a, b) => a + b, 0), // somando itens do array
      endGame(),
      bestGame()
    );
  } else { return; }
};
