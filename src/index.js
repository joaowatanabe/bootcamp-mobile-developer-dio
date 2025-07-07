// Player object - O Computador deve receber dois personagens para disputar a corrida em um objeto cada
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

const getRandomBlock = async () => {
  let random = Math.random(); // valor randomico entre 0 e 1: ex - 0.33
  let result;

  //condiconal para tirar qual pista será a disputa, onde temos 3 tipos de pista
  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case (random < 0, 66):
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
};

// Motor que faz o jogo funcionar
const playRaceEngine = async (character1, character2) => {
  for (let i = 1; i <= 5; i++) {
    console.log(`🏁 Rodada ${i} 🏁`);

    // Sortear o bloco:

    let block = await getRandomBlock();
    console.log(`O Bloco sorteado é: ${block}`);
  }

  // Rolar os dados:
  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  // Teste de habilidade:
  let testeSkill1 = 0;
  let testeSkill2 = 0;

  if (block === "RETA") {
    testeSkill1 = diceResult1 + character1.VELOCIDADE;
    testeSkill2 = diceResult2 + character2.VELOCIDADE;
  } else if (block === "CURVA") {
    testeSkill1 = diceResult1 + character1.MANOBRABILIDADE;
    testeSkill2 = diceResult2 + character2.MANOBRABILIDADE;
  } else if (block === "CONFRONTO") {
    let powerResult1 = diceResult1 + character1.PODER;
    let powerResult2 = diceResult2 + character2.PODER;
  }
};

// Cada corrida consiste em 5 rodadas de um bloco de pistas aleatorios (reta, curva ou confornto)

// A funcão main vai chamar as outras funcoes, sendo ela a principal/ funcao de entrada
// para deixar uma funcao auto invocavel usamos (funcao)()
(async () => {
  console.log(
    `🏁 Corrida entre ${player1.NOME} VS ${player2.NOME} começando... \n`
  );

  await playRaceEngine(player1, player2);
})();
