let nomeJogador = "Tarkus";
let jogadorVitorias = 47;
let jogadorDerrotas = 19;
let nivelJogador;
const partidasJogadas = 5;

function calcularVitorias(vitorias , derrotas){
    let resultado = vitorias - derrotas;
    return resultado;
}

function calcularRank(vitoriasAtuais){
    if (vitoriasAtuais < 10) {
    nivelJogador = "Ferro";
    } else if (vitoriasAtuais >= 11 && vitoriasAtuais <= 20) {
    nivelJogador = "Bronze";
    } else if (vitoriasAtuais >= 21 && vitoriasAtuais <= 50) {
    nivelJogador = "Prata";
    } else if (vitoriasAtuais >= 51 && vitoriasAtuais <= 80) {
    nivelJogador = "Ouro";
    } else if (vitoriasAtuais >= 81 && vitoriasAtuais <= 90) {
    nivelJogador = "Diamante";
    } else if (vitoriasAtuais >= 91 && vitoriasAtuais <= 100) {
    nivelJogador = "Lendário";
    } else {
    nivelJogador = "Imortal";
    }
    return nivelJogador;

}

console.log(`----- Progresso do Jogador: ${nomeJogador} -----`);

let saldoInicial = calcularVitorias(jogadorVitorias , jogadorDerrotas);
let rankInicial = calcularRank(jogadorVitorias)
console.log(`\nO jogador ${nomeJogador} inicialmente tem:\n
    Vitórias: ${jogadorVitorias}\n
    Derrotas: ${jogadorDerrotas}\n
    Saldo: ${saldoInicial}
    Atualmente está no Rank: ${rankInicial}\n`);


for(let partida = 1; partida <= partidasJogadas; partida++){
    jogadorVitorias += 8;
    jogadorDerrotas += 5;

    console.log(`\n----- Após Partida ${partida} -----`)
    console.log(`Vitórias: ${jogadorVitorias}, Derrotas: ${jogadorDerrotas}`);

    let saldoAtual = calcularVitorias(jogadorVitorias , jogadorDerrotas);
    let rankAtual = calcularRank(jogadorVitorias)

    console.log(`O Herói tem de saldo **${saldoAtual}** e está no Nível de: **${rankAtual}**\n`);
    
}

console.log(`----- Fim do Progresso de ${nomeJogador} -----`);