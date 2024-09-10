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

// Questão 4
function questao4() {
    // Leitura dos valores de A e B
    const A = parseInt(document.getElementById('interA').value);
    const B = parseInt(document.getElementById('interB').value);
    let C;

    // Verificação e cálculo
    if (A === B) {
        C = A + B;
    } else {
        C = A * B;
    }

    // Exibição do resultado
    document.getElementById('resultado4').innerText = "O valor de C é: " + C;
}

// Questão 5
function questao5() {
    // Leitura do valor do número
    const numero = parseFloat(document.getElementById('numero').value);
    let resultado;

    // Verificação e cálculo
    if (numero > 0) {
        resultado = numero * 2;
    } else {
        resultado = numero * 3;
    }

    // Exibição do resultado
    document.getElementById('resultado5').innerText = "O resultado é: " + resultado;
}

// Questão 6
function questao6() {
    // Leitura dos valores booleanos
    const valor1 = document.getElementById('valor1').value === 'true';
    const valor2 = document.getElementById('valor2').value === 'true';
    let resultado;

    // Verificação dos valores
    if (valor1 && valor2) {
        resultado = "Ambos são VERDADEIROS";
    } else if (!valor1 && !valor2) {
        resultado = "Ambos são FALSOS";
    } else {
        resultado = "Um é VERDADEIRO e o outro é FALSO";
    }

    // Exibição do resultado
    document.getElementById('resultado6').innerText = resultado;
}

// Questão 7
function questao7() {
    // Leitura do valor do número
    const numero = parseInt(document.getElementById('numeroIMP').value);
    let resultado;

    // Verificação e cálculo
    if (numero % 2 === 0) {
        resultado = numero + 5;
    } else {
        resultado = numero + 8;
    }

    // Exibição do resultado
    document.getElementById('resultado7').innerText = "O resultado é: " + resultado;
}

// Questão 8
function questao8() {
    // Leitura dos valores
    const valor1 = parseInt(document.getElementById('valor01').value);
    const valor2 = parseInt(document.getElementById('valor02').value);
    const valor3 = parseInt(document.getElementById('valor03').value);

    // Colocando os valores em um array
    const valores = [valor1, valor2, valor3];

    // Ordenando os valores em ordem decrescente
    valores.sort((a, b) => b - a);

    // Exibição do resultado
    document.getElementById('resultado8').innerText = "Os valores em ordem decrescente são: " + valores.join(", ");
}