var ola = "Olá Mundo JS";

console.log(ola);

function log(valor) {
    console.log(valor);
}

//Tipos de variáveis

var valor = 10;
log(typeof valor);
var palavra = "Fernando";
log(typeof palavra); // string
var isOK = true;
log(typeof isOK); //boolean
var meuObj = {}; // sempre que tiver chaves significa que é um onjeto
var meuArray = []; // array
var nulo = null; //nulo
var variavelflamengo; // undefined, não está definido ainda.

//Escopo de variável
function compararEscopo() {
    if (true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco"; // let só é visível dentro do bloco de função. É usada para quando queremos uma variável menos visível, "escondida"
        const constDentro = "Const dentro do bloco"; // const só é visível dentro do bloco de função. É usada para quando queremos uma variável menos visível, "escondida"


        log(varDentro);
        log(letDentro);
        log(constDentro);

    }
    log(letDentro); // nessa parte é para dar erro pois o let só funciona dentro do bloco. O mesmo é para acontecer com a const constDentro
}
compararEscopo();

//Operações Simples

const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 * n2); //5
log(n1 / n2); // 0.2


log(n1 == n2); //false
log(n2 == valorNumericoStr); // true, pq no JS você pode comparar tipos diferentes de variáveis como nesse caso: numérico com string
log(n2 === valorNumericoStr) // falso, pois três "=" compara o valor e o tipo de variável

log((n2 > n1 || n2 > n1) && 1 > 2); // falso pois a segunda condição do && era falsa.


// Manipulando Arrays

let frutas = ["Maca", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[2]); //laranja 

log(frutas); //vê todas as posições do vetor
frutas.pop()//  Remove o último valor do array
frutas.push("Manga"); // Adiciona um elemento na última posição do array
frutas.unshift("Melão"); // Adiciona elemento ao início do Array


// Estruturas Condicionais
const idade = 18;
if (idade > -18) {
    log("Sou adulto");
}
else if (idade >= 2) {
    log("Sou criança"):
}
else {
    log("Sou bebê");
}

const instituicao = "CEUB";
switch (instituicao) {
    case "CEUB":
        log("Faculdade");
        break; // senão colocar o break, ele procura o primeiro caso verdadeiro e continua dando o restante como verdadeiro, gerando erro no código.
    case "CIL":
        log("Escola de Línguas");
        break;
    case "CEM10":
        log("Escola");
        break;
}

for (let loop = 0; loop < 5; log++); {// 1º construção da variável | 2º é o incremento | 3º é a adição
    l//=("Meu valor no loop:+$loop")// Concatenação
    log(`Meu valor no loop: ${loop}`);// Jeito mais utilizado de concatenar é com a crase
}
let valorWhile = 0;
while (valorWhile < 5) {
    log(`Meu valor no While: $(valorWhile}`); //se deixar apenas dessa forma acontece o loop infinito
    valorWhile++; // Adicionado para matar o loop 
}

//Funções Assícronas - permite executar operações sem bloquear a execução do código

async function buscarDados() { //função async no JS é chamada de promessa, pq é uma promessa de retorno de algo
    return new Promise((resolve) => { //função anônima
        setTimeout(() => {
            resolve("Dados Recebidos");

        }, 4 * 1000); //parâmetro sempre vai estar em milisegundos, neste caso, colocamos 4 segundos.
    });
}
async function executarBusca() {
    log("Buscando....");
    let resultado = await buscarDados(); //senão colocar o await aqui vai dar erro pois o log vai imprimir a variável resultado nulo
    log(resultado);
}


executarBusca();

const meuMetodo = function exemploMetodo() {
    log("Executei por método normal");
}

log(meuMetodo);

const objTeste = {
    oi() {
        log("Oi")
    },
    tchau() {
        log("Tchau");
    }
};
objTeste.oi();
objTeste.tchau();

