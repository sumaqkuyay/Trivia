/*var preguntasH = [
"Quién descubrió MachuPicchu",
"Quién fue el presidente mas joven del Perú",
"Qué presidente oficializo el derecho al voto femenino"
];
var respuestasH= [
  ["Hiram Bingham","Augusto Berns","Antonio Raimondi"],
  ["Felipe Santiago Salaverry","Alan Garcia","Luis Miguel Sanchez Cerro"],
  ["Manuel A. Odria","Manuel Prado Ugarteche","Jose Luis Bustamante y Rivero"],
];
var indiceAleatorio = Math.floor(Math.random()*preguntasH.legth);
var preguntasD = [
"Quienes anotaron los goles que nos clasifico al mundial Rusia 2018",
"Que puesto ocupo Peru en la tabla final de las eliminatorias rumbo a Rusia 2018",
"Cual fue el ultimo mundial que Peru asisitio antes de Rusia 2018"
];
var respuestasD= [
  ["Farfan y Cueva","Guerrero y Farfan","Flores y RuiDiaz"],
  ["Quinto","Tercero","Sexto"],
  ["España 82","Argentina 78","Italia 90"],
];
*/

//const nombre = prompt("Ingresa tu nombre:");


function myFunction() {
  document.getElementById("name2").value = document.getElementById("name1").value;
}

//  document.getElementById("name1").classList.add("ocultar");
  //document.getElementById("name1").classList.add("ocultar");

function check() {
var pregunta1 = document.trivia.pregunta1.value;
var pregunta2 = document.trivia.pregunta2.value;
var pregunta3 = document.trivia.pregunta3.value;
var correct =0;
var incorrect=0;

if(pregunta1=="Hiram Bingham" || pregunta1=="Farfan y Cueva"){
  correct++;
}
else {
  incorrect++;
}
if(pregunta2=="Felipe Santiago Salaverry" || pregunta2=="Quinto"){
  correct++;
}
else {
  incorrect++;
}
if(pregunta3=="Manuel A. Odria" || pregunta3=="España 82"){
  correct++;
}
else {
  incorrect++;
}

document.getElementById('despuesEnviar').style.visibility="visible";
document.getElementById("numeroCorrecto").innerHTML="Tu tienes " + correct + " correctos y " + incorrect +" incorrectos";
}
