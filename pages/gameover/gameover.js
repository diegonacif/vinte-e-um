// Importando elementos do html
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

// Importando dados do localstorage
const player1Name = localStorage.getItem("name1");
const player2Name = localStorage.getItem("name2");
const player1Result = Number(localStorage.getItem("result1"));
const player2Result = Number(localStorage.getItem("result2"));
const vCount1Span = document.getElementById('vCount1Wp');
const vCount2Span = document.getElementById('vCount2Wp');
const vCount1 = Number(localStorage.getItem("vCount1"));
const vCount2 = Number(localStorage.getItem("vCount2"));

// Importando Divs dos players
const player1Div = document.getElementById("player1Div");
const player2Div = document.getElementById("player2Div");

// URL DINAMICA
let url;
if (window.location.origin === "https://diegonacif.github.io") {
  url = "/vinte-e-um/index.html"; //URL PRODUÇÃO
} else {  
  url = "/index.html"; // URL DESENVOLVIMENTO
}

function setNames() {  
  if (player1Result === null) {
    return (
      player1.innerHTML = player1Name,
      player2.innerHTML = player2Name,
      result1.innerHTML = 0,
      result2.innerHTML = player2Result,
      vCount1Span.innerHTML = vCount1,
      vCount2Span.innerHTML = vCount2
    )
  } else if (player2Result === null) {
    return (
      player1.innerHTML = player1Name,
      player2.innerHTML = player2Name,
      result1.innerHTML = player1Result,
      result2.innerHTML = 0,
      vCount1Span.innerHTML = vCount1,
      vCount2Span.innerHTML = vCount2
    )
  } else {
    return (
      player1.innerHTML = player1Name,
      player2.innerHTML = player2Name,
      result1.innerHTML = player1Result,
      result2.innerHTML = player2Result,
      vCount1Span.innerHTML = vCount1,
      vCount2Span.innerHTML = vCount2
    )
  }
};

function whoWon() {
  if ((player1Result < player2Result && player2Result <= 21) || player1Result > 21) {
    return (
      console.log(`${player2Name} venceu!`),
      player2Div.className = `${player2Div.className} winner`
    )
  } else if (player1Result === player2Result) {
    return (
      console.log("Houve um empate, senhoras e senhores!")
    )
  } else if ((player2Result < player1Result && player1Result <= 21) || player2Result > 21) {
    return (
      console.log(`${player1Name} venceu!`),
      player1Div.className = `${player1Div.className} winner`
    )
  } else {
    console.log("erro")
  }
}

function bestGame1() {
  const resultSpan = document.getElementById('result1');
  if (resultSpan.innerHTML === '21') {
    return resultSpan.style.color = 'gold';
  } else {
    return;
  }
}
function bestGame2() {
  const resultSpan = document.getElementById('result2');
  if (resultSpan.innerHTML === '21') {
    return resultSpan.style.color = 'gold';
  } else {
    return;
  }
}

window.onload = () => {
  setNames();
  whoWon();
  bestGame1();
  bestGame2();
}

function newGame() {
  return(
    localStorage.removeItem('result1'),
    localStorage.removeItem('result2'),
    window.location.replace(`${window.location.origin}${url}`)
  )
};
