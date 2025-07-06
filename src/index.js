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

// Para a batalha da pista, precisamos criar a lógica de dados - Roll Dice

const rollDice = async () => {
  // ramdom tira 0 ou 1 e para dar 6 multiplicamos por, logo preciamos arredondar o valor, que irá de 0 a 5.algumacoisa logo preciamos somar 1.
  return Math.floor(Math.random() * 6) + 1;
};

