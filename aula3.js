/*INTRODUÇÃO AO JAVASCRIPT*/

/*________________________DECLARAÇÃO DE  VARIAVEIS___________________________ */
//const nome = "Jose" //const = coisas que não variam

//const idade = 27 

/*
const não pode fazer retribuição
EX: 
nome = "Maria" 
*/

//let a = 2 // let = coisas que variam
//let b = 'a b c' 

//é usado aspas duplas e simples


/*___________________DECLARAR STRINGS E DELIMITAR COM CRASE___________________*/
//let endereco = `Rua K, 12`


//outra forma de declarar
//var c = 2+3
//var d = "abcd" //



/*____________________________EXEMPLO DE DECLARAÇÃO_____________________________*/
/*var linguagem = "Javascript"
console.log ("Aprendendo, " + linguagem)//
var linguagem = "Java"
console.log ("Aprendendo, " + linguagem)
*/


/*____________________________MELHOR FORMA DE DECLARAR___________________________*/
/*var linguagem = "Javascript"
console.log ("Aprendendo, " + linguagem)//
linguagem = "Java"
console.log ("Aprendendo, " + linguagem)*/


/*_____________________________EXEMPLO DE DECLARAÇÃO______________________________*/
/*var idade = 18
console.log ("Oi. ", + nome)//variavel sem atribuição = lixo de memória (undefined)
if (idade >= 18){
    //içamento host
    var nome = "João" 
    //console.log ("Parabens, " + nome + "você pode dirigir")
    //MELHOR FORMA DE DECLARAR
    //printf ("Parabens, %s", nome);
    console.log (`Parabens, ${nome}. Você pode dirigir. `)
}
console.log ("Até mais, " + nome )
*/

//______________________________________TIPOS_____________________________________
//o o tipo no javascript não é estático
/*int a = 2; //essa formna de declarar é errada
floar f = 3.5; */

/*EM JAVA
String s1 = "", s2 = "";
int a = s1 - s2;
*/

/* FORMA ERRADA
var = 2 
a = "abc"
var b = "1"
var c = a - b
console.log (c)
*/

//_____________________________________COERÇÃO___________________________________
/*
const n1 = 2; //number
const n2 = '3'; //string
//coerção implícita de n1, concatenação acontece 
//resultado = 21(?)
const n3 = n1 + n2;
console.log(n3);
//coeração explícita, soma acontece
//resultado = 5
const n4 = n1 + Number (n2)
console.log(n4)
*/


/*__________________________ FUNCIONAMENTO DO OPERADOR == __________________________
console.log(1 == 1)             //true (comparação por igualdade)
console.log (1 == "1")          //true (coerção implicita de um dos dois) !!!!!!NÃO USAR ESSE == !!!!! 
console.log (1 === 1)           //true 
console.log (1 === "1")         //false (não há coersão; é comparado os tipos de ambas as variáveis)
console.log (true == 1)         //true 
console.log (1 == [1])          //true
console.log (null == null)      //true
console.log (null == undefined) //true (false == false)
console.log([] == false)        //true 
console.log ([] == [])          //false 
const a = []
const b = a
console.log (a == b)
console.log(nome !== " ")
*/


/*________________________________DECLARAÇÃO DE VETORES________________________________
v1 = [];
//podemos acessar qualquer posição, começando de zero
v1[0] = 3.4; //variavel de referência (ponteiro)
v1[10] = 2; 
v1[2] = true
//aqui, v1 tem comprimento igual a 11
console.log(v1.length)
//inicializando na declaração
//v2 = [2, "abc", true]
//console.log(v2)
//iterando 
for (let i = 0; i < v1.length; i++){
    console.log(v1[i])
}
*/


/*
const numeros = [1, 2]
console.log(numeros.length)
numeros [4] = 2 
console.log(numeros.length)
//por const não vale fazer isso -> numeros = [1, 2]
//vetores são imutaveis então numeros[100] = 2 ...
*/


//ENCONTRANDO NOMES
//vetor
//const nomes = [`Ana Maria`, `Antonio`, `Rodrigo`, `Alex`, `Cristina`];

/*arrow function
() => ()
function filter(funcao){
    funcao()
}*/
/*
function map (v, f) {
    let aux =[]
    for (let i = 0; i < v.lenght; i++){
        aux.push(f(v[i]))
    }
    return aux
}
console.log(map(["abc", "def"], e => e.lenght))
//console.log(map(["abc", "def"], (e) => e.charAt(0)))

/*
function filter( v, f){
    let aux= []
    for (let i =0; i<v.lenght; i++){
        if(f(v[i])){
            aux.push(v[i])
        }
    }
    return aux
}*/




//filtro 
/*const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);


const nomes = ["Ana Maria", "antonio", "rodrigo", "alex", "cristina"]
const res=nomes.map((nome) => nome.length )
console.log(res)

/*every - todo 

console todosComecamComA= nomes.every (nome => nome.startsWith("A"))
console.log(todoscComecamComA)*/

/*
reduce-  ela espera receber um acumulador e um valor atual 
ac -> acumulador 
v -> valor
const valores  = [1 , 2,3, 4]
const soma = valores.reduce((ac, v) => ac + v)
console.log(soma)*/
/*
function hello(){
    console.log("hello")
}
hello()

function hello(nome){
    console.log("Hello," + nome)
} 
hello("José")*/

/*
function soma(a, b){
    return a+b
}

const res= soma(2,3)
console.log(res)*/

/* FUNÇÕES SEM NOME
const dobro = function (n){
    resturn 2 *n
}
console.log(dobro(4))


const triplo = function(n=1){
    return n *3
}
console.log(triplo()) //que vai aoarecer como undefined
console.log(triplo(4)*/


/*Arrow function

const hello = () =>console.log("Hello")
hello()*/

/*Arrows functions - não usar return 
const dobro = (n)=> 2*n      ou
const dobro = (n)=> {2*n}   ou 
const triplo =  n => 2*n

console.log(triplo(5))

se não colocar {} não precisa do return
*/

/*
const continha = (r) => {
    let r = n
    r= r + n
    r= r + n  //ou
    return (
    r + r + r + r + r + r +r +r
    )
}
console.log(continha(1))
*/
//funcção de alta ordem, pois recebe uma função
/*function f (funcao){
    funcao()
}
   
//função de alta ordem tambem, pois ela devolve uma função
function g (){
    function outraFuncao(){
        console.log("Fui produzida pela g")
    }
    return outraFuncao
}


const resultadoDaG=g() 
como chamar a função resultado da G: console.log(resultadoDaG())



f (function(){
    console.log("Estou sendo passada para a f")
})

f(1)


*/

/*
let umaFuncao = function(){
    console.log("Fui armazenada em uma variavel")
}

umaFuncao()
*/

JSON
let pessoa ={
    nome:"João",
    idade: 17
}

console.log(pessoa.nome) // console.log(pessoa['idade'])

let p={
    nome:"Maria",
    idade:22,
    endereco:{
        logradouro:"Rua B",
        numero:44,
        bairro:"Vila K"
    }
}
console.log(p.endereco.logradouro)//console.log(p['endereco'].numero) // console.log(p.endereco['bairro']) // console.log(p['endereco']['bairro])