function clicou(){
    //alert("obrigada por clicar");
    document.getElementById("agradecimento").innerHTML="<b>obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("http://google.com");
    //window.location.href = "http://google.com/";

}
function trocar(elemento){
    elemento.innerHTML = "Obrigada por passar o mouse";

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
}
function trocar(){
    getElementById(mousemove).innerHTML = "Obrigada por passar o mouse";

}

function voltar(){
    getElementById(mousemove).innerHTML = "Passe o mouse aqui";
}
*/

/*var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar= true;
    }else{
        validar= false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

function soma(n1,n2){
    return n1+n2;
}
//alert(soma(5,10));
function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
//alert(setReplace("Vai Japão", "Japão", "Brasil"));



var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

var count;
for (count=0; count<=5; count++){
    console.log(count);
}*/


/*var count = 0;
while(count<=5){
    console.log(count);
    count++;

}*/


/*var idade = prompt("Qual sua idade?");
//var idade = 18;
if(idade >=18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
}
*/


/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));




/*var nome="Rachel Kozlowsky";
var n1= 5;
var n2= 3;
var frase="Alemanha é o melhor time do mundo";
//alert(nome + " tem " +idade);
//alert(idade+idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toUpperCase("Alemanha", "Japão"));
console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Alemanha", "Japão"));*/
