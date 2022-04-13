const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

// URL DINAMICA
let url;
if (window.location.origin === "https://diegonacif.github.io") {
  url = "/vinte-e-um/pages/player1/player1.html"; //URL PRODUÇÃO
} else {  
  url = "/pages/player1/player1.html"; // URL DESENVOLVIMENTO
}

function nameStorage() {
  if (player1.value === player2.value && player1.value !== "" 
  && player2.value !== "") {
    return alert("Nomes dos jogadores precisam ser diferentes!")
  } else if (player1.value !== "" && player2.value !== "") {
    return (
      localStorage.clear(),
      localStorage.setItem("name1", player1.value),
      localStorage.setItem("name2", player2.value),
      window.location.replace(`${window.location.origin}${url}`),
      console.log(player1.value, player2.value)
      )
    } else {
    return alert("Insira os nomes dos jogadores!")
    }
};