const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const player1Name = localStorage.getItem("name1");
const player2Name = localStorage.getItem("name2");
const player1Result = localStorage.getItem("result1");
const player2Result = localStorage.getItem("result2");

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
window.onload = setNames();

function newGame() {
  return(
    localStorage.clear(),
    window.location.replace("http://127.0.0.1:5500/index.html")
  )
};