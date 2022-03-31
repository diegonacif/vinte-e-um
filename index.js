const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

function nameStorage() {
  return (
    localStorage.setItem("name1", player1.value),
    localStorage.setItem("name2", player2.value),
    console.log(player1.value, player2.value)
  )
};