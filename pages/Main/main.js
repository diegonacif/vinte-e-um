const cardsSpan = document.getElementById('cards');
const resultSpan = document.getElementById('result');
const min = Math.ceil(1);
const max = Math.floor(13);
let cardsArray = []

function addCard () {  
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // criando numero randomico
  cardsArray.push(randomNum)  

  return (
    cardsSpan.innerHTML = cardsArray,    
    resultSpan.innerHTML = cardsArray.reduce((a, b) => a + b, 0), // somando itens do array
    console.log(cardsArray)
  );
};