// Objeto jogador - O Computador deve receber dois personagens para disputar a corrida em um objeto cada
const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

// Para a batalha da pista, precisamos criar a logica de dados - Roll Dice

const rollDice = async () => {
  // ramdom tira 0 ou 1 e para dar 6 multiplicamos por, logo preciamos arredondar o valor, que ira de 0 a 5.algumacoisa logo preciamos somar 1.
  return Math.floor(Math.random() * 6) + 1;
};


// Motor que faz o jogo funcionar
const playRaceEngine = async (character1, character2) => {
  for(let i = 1; i <= 5; i++) {
    console.log(`🏁 Rodada ${i} 🏁`);

    // Sortear o bloco
    
  }
};

// Cada corrida consiste em 5 rodadas de um bloco de pistas aleatorios (reta, curva ou confornto)

// A funcão main vai chamar as outras funcoes, sendo ela a principal/ funcao de entrada
// para deixar uma funcao auto invocavel usamos (funcao)()
(async () => {
  console.log(
    `🏁 Corrida entre ${player1.NOME} VS ${player2.NOME} começando... \n`
  );

  await playRaceEngine(player1, player2)
})();
