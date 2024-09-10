// Questão 01
function questao1() {
  // Ler os valores dos inputs
  const valorA = parseFloat(document.getElementById('inputA').value);
  const valorB = parseFloat(document.getElementById('inputB').value);
  const valorC = parseFloat(document.getElementById('inputC').value);

  // Verificar se a soma de A + B é menor que C
  const resultado = document.getElementById('resultado');
  if (valorA + valorB < valorC) {
      resultado.textContent = 'A soma de A + B é menor que C';
  } else {
      resultado.textContent = 'A soma de A + B não é menor que C';
  }
}

// Questão 02
function questao2() {
  //ler valores dos inputs
  const nome = document.getElementById('nome').value;
  const sexo = document.getElementById('sexo').value.toUpperCase();
  const estadoCivil = document.getElementById('estado-civil').value.toUpperCase();
  const resultado = document.getElementById('resultado2');
  
  // Verificar as condições
  if (sexo === 'F' && estadoCivil === 'CASADA') {
    const tempoCasada = prompt('Por quantos anos você está casada?');
    resultado.textContent = `${nome}, você está casada há ${tempoCasada} anos.`;
} else {
    resultado.textContent = `${nome}, não há informações adicionais necessárias.`;
}
}

// Questão 3
function questao3() {
  // Ler valores dos inputs
const numero = parseInt(document.getElementById('inputPI').value);

// Verificar se o número é par ou ímpar
const resultado = document.getElementById('resultado3');
if (isNaN(numero)) {
    resultado.textContent = 'Por favor, insira um número válido.';
} else if (numero % 2 === 0) {
    resultado.textContent = `O número ${numero} é par.`;
} else {
    resultado.textContent = `O número ${numero} é ímpar.`;
}
}