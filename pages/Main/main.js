const cardsSpan = document.getElementById('cards');
const resultSpan = document.getElementById('result');
const actionBtn = document.getElementById('actionBtn');
const min = Math.ceil(1);
const max = Math.floor(13);
let cardsArray = []

function endGame() {  
  if (resultSpan.innerHTML < 21) {
    return;
  } else if (resultSpan.innerHTML == 21) {
    return actionBtn.innerHTML = "You win !!!"
  } else {
    return actionBtn.innerHTML = "You lose !"
  }
};

function addCard () {  
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // criando numero randomico
  cardsArray.push(randomNum)
  
  if (resultSpan.innerHTML < 21) {
    return (
      cardsSpan.innerHTML = cardsArray.toString().replace(/,/g, " - "), // manipulando string
      resultSpan.innerHTML = cardsArray.reduce((a, b) => a + b, 0), // somando itens do array
      endGame()
    );
  } else { return; }
};
