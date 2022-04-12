// Importando elementos do html
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

// Importando dados do localstorage
const player1Name = localStorage.getItem("name1");
const player2Name = localStorage.getItem("name2");
const player1Result = localStorage.getItem("result1");
const player2Result = localStorage.getItem("result2");

// Importando Divs dos players
const player1Div = document.getElementById("player1Div");
const player2Div = document.getElementById("player2Div");

// const url = "/index.html"
const url = "/vinte-e-um/index.html"

function setNames() {  
  if (player1Result === null) {
    return (
      player1.innerHTML = player1Name,
      player2.innerHTML = player2Name,
      result1.innerHTML = 0,
      result2.innerHTML = player2Result
    )
  } else if (player2Result === null) {
    return (
      player1.innerHTML = player1Name,
      player2.innerHTML = player2Name,
      result1.innerHTML = player1Result,
      result2.innerHTML = 0
    )
  } else {
    return (
      player1.innerHTML = player1Name,
      player2.innerHTML = player2Name,
      result1.innerHTML = player1Result,
      result2.innerHTML = player2Result
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

function onLoad() {
  return (
    setNames(),
    whoWon()
  )
}
window.onload = onLoad();

function newGame() {
  return(
    localStorage.clear(),
    window.location.replace(`${window.location.origin}${url}`)
  )
};
