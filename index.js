const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const startBtn = document.getElementById('startBtn');

// IMPORTANDO DADOS LOCALSTORAGE
const player1Name = localStorage.getItem("name1");
const player2Name = localStorage.getItem("name2");
const vCount1 = localStorage.getItem("vCount1");
const vCount2 = localStorage.getItem("vCount2");

// LISTENERS DOS INPUTS
document.getElementById("player1").oninput = () => {
  filledInput()
  clearBtn1()
};
document.getElementById("player2").oninput = () => {
  filledInput()
  clearBtn2()
};

// ATIVAÇÃO DO ESTILO DO BOTÃO
function filledInput() {
  if (player1.value === "" || player2.value === "") {
    return startBtn.className = "startBtn-inactive"
  } else {
    return startBtn.className = "startBtn-active"
  }
};

// URL DINAMICA
let url;
if (window.location.origin === "https://diegonacif.github.io") {
  url = "/vinte-e-um/pages/player1/player1.html"; //URL PRODUÇÃO
} else {  
  url = "/pages/player1/player1.html"; // URL DESENVOLVIMENTO
};

function nameStorage() {
  if (player1.value === player2.value && player1.value !== "" 
  && player2.value !== "") {
    return alert("Nomes dos jogadores precisam ser diferentes!")
  } else if (player1.value !== "" && player2.value !== "") {
    return (
      localStorage.clear(),
      localStorage.setItem("name1", player1.value),
      localStorage.setItem("name2", player2.value),
      window.location.replace(`${window.location.origin}${url}`)
      )
    } else {
    return alert("Insira os nomes dos jogadores!")
    }
};

// FUNCTION PARA MANTER OS NOMES NOS INPUTS
function setNames() {  
  if (player1Name || player2Name) {
    return (
      player1.value = player1Name,
      player2.value = player2Name
    )
  } else {
    return /* (
      console.log("nada a declarar")
    ) */
  }
};

// FUNCTION LIMPAR NOMES
function clearName1() {
  return (
    localStorage.removeItem('name1'),
    player1.value = "",
    filledInput(),
    clearBtn1()
  );
};
function clearName2() {
  return (
    localStorage.removeItem('name2'),
    player2.value = "",
    filledInput(),
    clearBtn2()
  );
};

// FUNCTION EXIBIÇÃO LIMPAR NOMES
function clearBtn1() {
  const closeBtn = document.getElementById('closeBtn1');

  if(player1.value === "") {
    return closeBtn.style.display = "none";
  } else {
    return closeBtn.style.display = "inline-block";
  }
};
function clearBtn2() {
  const closeBtn = document.getElementById('closeBtn2');

  if(player2.value === "") {
    return closeBtn.style.display = "none";
  } else {
    return closeBtn.style.display = "inline-block";
  }
}

window.onload = () => {
  setNames();
  filledInput();
  clearBtn1();
  clearBtn2();
  () => {
    console.log(vCount1)
  }
};
