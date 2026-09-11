// ==========================================
// EXERCÍCIOS DE LÓGICA - JAVASCRIPT
// Baseados no curso:
// "Lógica de programação: mergulhe em programação com JavaScript"
// ==========================================


// ===== EXERCÍCIO 1 =====
// Peça o nome do usuário.
// Exiba uma mensagem de boas-vindas utilizando a variável do nome.

let nome = prompt('Digite seu nome');

alert(`Boas vindas ${nome}`);                                                  

// ===== EXERCÍCIO 2 =====
// Peça a idade do usuário.
// Se a idade for menor que 18, informe que ele é menor de idade.
// Caso contrário, informe que ele é maior de idade.

let idade = Number(prompt('Qual a sua idade?'));

if (idade >= 18){
    alert ('Você é maior de idade');
}else{
    alert('Você é menor de idade');
}

// ===== EXERCÍCIO 3 =====
// Peça um número.
// Informe se ele é:
// - Positivo
// - Negativo
// - Zero

let numeroex3 = Number(prompt('Digite um número'));

 if (numeroex3 > 0){
    alert ('O número que digitou é positivo');
 } 
 if (numeroex3 == 0){
    alert('O número é neutro');
 }
 if (numeroex3 < 0){
    alert('O número é negativo');
 }

// ===== EXERCÍCIO 4 =====
// Peça dois números.
// Mostre:
// - Soma
// - Subtração
// - Multiplicação
// - Divisão

let numero1 = Number(prompt('Digite o número 1'));
let numero2 = Number(prompt('Digite o número 2'));

console.log (numero1 - numero2, numero1 + numero2, numero1 * numero2, numero1 / numero2)

// ===== EXERCÍCIO 5 =====
// Crie uma senha fixa (1234).
// Peça que o usuário digite a senha.
// Se estiver correta, exiba "Acesso permitido".
// Caso contrário, exiba "Senha incorreta".

let senha = 2510;
let login;
tentativas = 1;
let 

while (login != senha){
login = Number(prompt('Digite a senha numérica'));
if (tentativas > 3){
    alert('Acesso bloqueado...');
    break;
}
if (login == senha){
    alert ('Liberado.');
    break;
}else{
    alert('Acesso negado');

    tentativas ++;
}}


// ===== EXERCÍCIO 6 =====
// Peça três notas.
// Calcule a média.
// Se a média for:
// Maior ou igual a 7 -> Aprovado
// Entre 5 e 6,9 -> Recuperação
// Menor que 5 -> Reprovado

let nota1 = Number(prompt('Digite a primeira nota'));
let nota2 = Number(prompt('Digite a segunda nota'));
let nota3 = Number(prompt('Digite a terceira nota'));

let media = (nota1 + nota2 + nota3)/3;

if (media >= 7){
    alert('Aprovado.');
} else{
if (media == 5 && media < 6) {
    alert ('Recuperação'); }  
} 
if (media < 5){
    alert('Reprovado.');
}

// ===== EXERCÍCIO 7 =====
// Peça um número.
// Informe se ele é par ou ímpar.

let numeroex7 = prompt('Digite um número.');

if (numeroex7 %2 == 0){
alert ('O número é par');
}else {
    alert ('O número é impar');
}

// ===== EXERCÍCIO 8 =====
// Utilizando um while,
// mostre no console os números de 1 até 20.

let numeroex8 = 1;

while (numeroex8 <=20){
    console.log (numeroex8);

    numeroex8++;
}

// ===== EXERCÍCIO 9 =====
// Peça um número.
// Conte de 0 até esse número utilizando um while.

let numeropedido = Number(prompt('Digite um número, o sistema vai contar de 0 ao número desejado.'));
let numeroex9 = 0;

while (numeroex9 <= numeropedido){
console.log (numeroex9);

numeroex9++;
}

// ===== EXERCÍCIO 10 =====
// Peça um número.
// Conte desse número até 0 utilizando um while.

let numeropedidoex10 = Number(prompt('Digite um número, o sistema vai printar o número em decrescente.'));

while (numeropedidoex10 >= 0){
    console.log(numeropedidoex10);
    numeropedidoex10--;
}

// ===== EXERCÍCIO 11 =====
// Peça um número.
// Mostre apenas os números pares até esse número.

let numeroex11 = Number(prompt('Digite um número'));
let inicial = 0;

while (inicial <= numeroex11){

    if (inicial % 2 == 0){
        console.log(inicial);
    } 
        
inicial++;
}


// ===== EXERCÍCIO 12 =====
// Crie um jogo de adivinhação.
// Gere um número aleatório entre 1 e 20.
// O jogador terá apenas 5 tentativas.
// Informe se ele venceu ou perdeu.

alert ('Bem vindo ao jogo do número secreto, caso ultrapassar 5 tentativas, você perde.');

let numerosecreto = parseInt(Math.random()*20+1);
console.log (numerosecreto);
let chute;
let tentativas = 1;

while (numerosecreto != chute){
    chute = Number(prompt('Adivinhe o número secreto de 1 a 20'));
    
    let tentativa_tentativas = tentativas >1? 'tentativas':'tentativa';

    if (numerosecreto == chute){
        alert (`Parabens você acertou o número secreto ${numerosecreto} com ${tentativas} ${tentativa_tentativas}`)
        break;
    }

    if (tentativas >= 5){
        alert('Você perdeu, pois ultrapassou 5 tentativas');
        break;}

    if (numerosecreto > chute){
        alert('O número secreto é maior');
    }else{
        alert('O número secreto é menor');
    }
    
    tentativas++;
}


// ===== EXERCÍCIO 13 =====
// Peça um número.
// Enquanto o número for diferente de 0,
// continue pedindo outro número.
// Quando o usuário digitar 0,
// exiba "Programa encerrado".

let numeroex13 = NaN;
let numerosistema = 0;

while (numeroex13 != numerosistema){
   numeroex13 = Number(prompt('Digite um número'));
    if (numeroex13 == 0){
        alert('Programa encerrado, pois foi digitado o número 0');
        break;
    }
}

// ===== EXERCÍCIO 14 =====
// Crie um menu utilizando while.
//
// 1 - Jogar
// 2 - Créditos
// 3 - Sair
//
// Enquanto o usuário não escolher a opção 3,
// o menu deve continuar aparecendo.

let opcao;
let jogar = 1;
let creditos = 2;
let sair = 3;

while (opcao != sair){
  opcao = Number(prompt('Digite uma opção. 1 - Jogar, 2 - Créditos ou 3 - Sair'));

if (opcao == jogar){
    alert('bem vindo ao jogo!');
}

if (opcao == creditos){
    alert('Este jogo foi desenvolvido por Kiri, obrigado por jogar.')
}

if (opcao == sair){
    alert ('Você saiu.');
}}

if (opcao != jogar && creditos && sair){
    alert ('Você digitou um número inválido');
}


// ==========================================
// DESAFIO FINAL
// ==========================================




// Crie um jogo de adivinhação melhorado.
//
// Regras:
// - Número secreto entre 1 e 50.
// - Máximo de 7 tentativas.
// - Informe se o número secreto é maior ou menor.
// - Ao acertar, informe em quantas tentativas o jogador venceu.
// - Caso perca, informe qual era o número secreto.


// ==========================================
// DESAFIO BÔNUS
// ==========================================

// Peça um número.
// Descubra se ele é primo.
//
// Exemplos:
// 7 -> Primo
// 10 -> Não é primo
// 13 -> Primo