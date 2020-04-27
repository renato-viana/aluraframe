var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});

// Exercícios
let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);

let numeros = [3, 2, 11, 20, 8, 7];

numeros.map((numero) => numero % 2 ? numero * 2 : numero);

numeros.map((numero) => (numero % 2 + 1) * numero);

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;                                            
}

let numeros = [10, 30];
console.log(somaDoisNumeros(...numeros));

// Menos é mais!
class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

let aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);

//Data
let diaMesAno = negociacao.data.getDate()
    + '/' + (negociacao.data.getMonth() + 1)
    + '/' + negociacao.data.getFullYear();

console.log(diaMesAno);

 /*  let data = new Date(this._inputData.value.replace(/-/g, ','));
        let data2 = new Date(this._inputData.value + ' 00:00:00');
         */

// dado e comportamento caminham juntos, mesmo que esse comportamento/regra esteja no construtor.
class Codigo {

    constructor(texto) {

        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
        this._texto = texto;        
    }

    _valida(texto) {

        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto() {

        return this._texto;
    }
}

let codigo1 = new Codigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);

// Implemente o código que cria uma nova lista que é a junção dos elementos de listaDeNomes1 e listaDeNomes2.

function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];

let listaCompleta = [...listaDeNomes1, ...listaDeNomes2];
exibeNoConsole(listaCompleta);

// a função concat aceita receber um número infinito de parâmetros, inclusive aqueles que não são um array. 
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Rômulo'));