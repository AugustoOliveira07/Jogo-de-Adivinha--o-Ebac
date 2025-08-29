// Gerar um número aleatório entre 1 e 100
Math.random(1, 100);
let numberRandom = Math.floor(Math.random() * 100) + 1;
let maxTentativas = 10;
let tentativas = 0;
console.log(numberRandom);

// Função para verificar o número chutado
function verificarNumero() {
    const chute = parseInt(document.getElementById('palpite').value);
    const resultado = document.getElementById('resultado');
if (tentativas < maxTentativas) {
    tentativas++;
    if (chute === numberRandom) {
        resultado.textContent = `Parabéns!!! Você acertou o número em ${tentativas} tentativas.`;
        document.getElementById('btnChutar').disabled = true;
    } else if (chute < numberRandom) {
        resultado.textContent = 'Tente um número maior!';
        resultado2.textContent = 'Você tem: ' + (maxTentativas - tentativas) + ' tentativas restantes.';
    }
    else {
        resultado.textContent = 'Tente um número menor!';
        resultado2.textContent = 'Você tem: ' + (maxTentativas - tentativas) + ' tentativas restantes.';
    }
} else {
    resultado.textContent = `Suas tentativas acabaram! O número era ${numberRandom}.`;
    resultado.style.color = 'black';
    document.getElementById('btnChutar').disabled = true;
}
    document.getElementById('palpite').value = '';
    document.getElementById('palpite').focus();
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Novo número aleatório
     numberRandom = Math.floor(Math.random() * 100) + 1;
    console.log(numberRandom);
  // Reset de tentativas
     tentativas = 0;

  // Limpa os textos
  document.getElementById('resultado').textContent = '';
  document.getElementById('resultado2').textContent = '';

  // Reativa o botão de chutar
  document.getElementById('btnChutar').disabled = false;

  // Limpa o campo de input
  document.getElementById('palpite').value = '';
  document.getElementById('palpite').focus();
}
