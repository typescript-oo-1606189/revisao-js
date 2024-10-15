import { dividirPalavras } from './string.js';

let professor = "Jefferson";
let quantidade = "1";
let vamosEstudarJavascript = true;
let listaAlunos = ['João', 'Fernanda', 'Maria'];
let listaDeCoisas = ['João', true, 10];

let endereco = {
  rua: 'Rua qualquer',
  numero: 29
}

let somar = (num1, num2) => {
  return num1 + num2;
}

const resultado = somar(10, 20);
console.log(resultado);

const palavras = dividirPalavras("Estou estudando Typescript");
console.log(palavras);