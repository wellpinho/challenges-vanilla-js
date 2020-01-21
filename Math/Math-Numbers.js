// Math.floor() arredonda pra baixo
// Math.ceil() arredonda pra cima
// Math.round() arrendonda de forma automatica
// Math.max() pega o maior numero de uma lista de numeros
// Math.min() pega o menor numero de uma lista de numeros
// numeros divido por 0 sempre dará true com valor infinity!

const numero = Number(prompt('Digite um numero: '));

const numeroTitulo = document.querySelector('#numero-title');
const raizaQuadrada = document.querySelector('#raizQuadrada');
const inteiro = document.querySelector('#inteiro');
const nulo = document.querySelector('#nulo');
const arredondaBaixo = document.querySelector('#arredondaBaixo');
const arredondaCima = document.querySelector('#arredondaCima');
const duasCasas = document.querySelector('#duasCasas');

numeroTitulo.innerHTML = `<span class="n">${ numero }</span>`;

raizaQuadrada.innerHTML = `
  A raiz quadrada do numero <span class="n">${ numero }</span>  
  é: <span class="n">${ numero ** 0.5 }</span>
`

inteiro.innerHTML = `
  <span class="n">${ numero }</span> 
  é numero inteiro? <span class="n">${ Number.isInteger(numero) }</span>
`

nulo.innerHTML = `É NaN? <span class="n">${ !numero }</span>`;

arredondaBaixo.innerHTML = `
  Arredondando <span class="n">${ numero }</span> 
  para baixo: <span class="n">${ Math.floor(numero) }</span>
`
arredondaCima.innerHTML = `
  Arredondando <span class="n">${ numero }</span> 
  para cima: <span class="n">${ Math.ceil(numero) }</span>
`
duasCasas.innerHTML = `
  <span class="n">${ numero }</span> 
  Com duas casas decimais: <span class="n">${ numero.toFixed(2) }</span>
`