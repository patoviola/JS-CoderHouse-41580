const direccion1 = prompt("Ingrese la direccion de partida")
const direccion2 = prompt("Ingresa direccion de destino")
const cantidadDeKM = prompt("Indique cantidad de KM")
let valorKM = 80

function valorDelViaje(){
    const valorFinal = cantidadDeKM * valorKM;
    console.log("El valor del viaje es:", "$" + valorFinal + ".-")
}
console.log("Direccion de partida:", direccion1)
console.log("Direccion de llegada:", direccion2)

valorDelViaje()


// function direccionDeInicio(){
//     console.log("Direccion de partida:", direccion1)
// }

// function direccionDeFin(){
//     console.log("Direccion de llegada:", direccion2)
// }

//direccionDeInicio()
//direccionDeFin()


