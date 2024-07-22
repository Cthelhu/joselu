// let calificacion = 2;
// let resultado;
// if (calificacion > 2){
//     resultado = "aprobaste"
// } else{
//     resultado = "reprobaste"
// };

// console.log(resultado);let


//crear un progreama que compare 3 valores numericos y me imprima cual es el mayor de todos

// let valor1 = 101;
// let valor2 = 6;
// let valor3 = 100;


// if (valor1>valor2 && valor1>valor3){
//     resultado = valor1 + " es el numero mas grande"
// }else if(valor2>valor1 && valor2>valor3){
//     resultado = valor2 + " es el numero mas grande" 
// }else if(valor3>valor1 && valor3>valor2){
//     resultado = valor3 + " es el numero mas grande"
// };





// console.log(resultado)

//repetir mientras condivion ==  verdadera {ejecutar codigo} esto es un bucle

// let contador =1;
// while(contador<=10){
//     console.log(contador);
//     contador=contador+1;
// }
//  console.log("fin del bucle");

//bucle for

// for (let i = 0; i <= 10; i++) {
//     console.log("dentro del for",i);
// }
// console.log("fuera del for")

//DOM (document object model) -> interfaz que gestiona las comunicaciones entre JS y HTML
// document.title = "Javascript"

// document.querySelector("h1").innerHTML = "introduccion";

// let boton = document.getElementById("2");
// let nombre = document.getElementsByName("nombre")

// console.log("input",nombre);

// boton.addEventListener("keypress", (tecla)=>{
//     console.log("apretaste", tecla.key);
//     if(tecla.key === "Enter"){
//         alert("bienvenido al curso de javascript");
//     }
// })


//  DESAFIO: mostrar el contenido del mensaje, el valor ingresado en nuestro elemento input

let boton = document.getElementsByTagName ("button");

boton.addEventListener("click", mensaje());
function mensaje() {
    console.log("texto del mensaje");
    alert("otro mensaje")
}













//  boton.addEventListener("click", mensaje);

//  function mensaje() {
//     console.log("texto del mensaje");
//     alert("otro mensaje")
// }