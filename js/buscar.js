const valor = document.getElementById("valor");
const arr=document.getElementById("arr");
const mensaje=document.getElementById("h5");
var tamano=prompt("Ingresa el Tamaño del array");
var array=[];
var NumerEncontrado;
for (let i=0; i<tamano ; i++){
 var number=Math.floor(Math.random()*100)-1
array.push(number)
 }
function buscarNumero(){
    for (let i=0 ; i<valor.value; i++){
         if (array[i] == valor.value){
            NumerEncontrado= true
        }}

    
mensaje.classList.add('alert','alert-success');
    if (NumerEncontrado==true){
        arr.innerHTML=(array)
        mensaje.innerHTML=("Número NumerEncontrado Exitosamente")
    }
    else {
        arr.innerHTML=(array)
        mensaje.innerHTML=("No Se Encuentra el Número Buscado")
    }

}
