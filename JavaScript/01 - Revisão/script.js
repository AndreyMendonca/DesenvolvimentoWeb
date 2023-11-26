console.log("funciona");
alert("Ola mundo");

let nome = "Andrey"
let idade = "23"
let logado = true;
let lista = ["ovo","massa","corante"]
let nomeCompleto = {nome: "Andrey", idade:10}
let sobrenome = "Mendonça"

let nomeSobrenome = `${nome} ${sobrenome}`;

console.log(typeof nomeCompleto)

const soma = (x,y) => x+y;
console.log(soma(1,2));


let valores = [0,1,2,3,4,5,6,7];
//tamanho
console.log(valores.length);

//adicionar mais valores
valores.push(10);

//remover ultimo item
valores.pop();
//remover o primeiro item
valores.shift();

//alterar o separados
console.log(valores.join("->"));


//ordem crescente ou alfabetica
console.log(valores.sort());
//decresente
console.log(valores.reverse());

// filtro
/*
valores.filter();

validar se tem algum elemento

valores.includes(1);
*/

// operação para clicar em ementos do html

document.getElementsByClassName("div")
document.getElementsByName("id")
document.getElementById("id")

