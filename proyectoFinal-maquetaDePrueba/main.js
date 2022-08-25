var direccion1 = prompt("Ingrese la direccion de partida")
var direccion2 = prompt("Ingresa direccion de destino")
var cantidadDeKM = prompt("Indique cantidad de KM")
let valorKM = 80

function valorDelViaje(){
    const valorFinal = cantidadDeKM * valorKM;
    console.log("El valor del viaje es:", "$" + valorFinal + ".-")
}
console.log("Direccion de partida:", direccion1)
console.log("Direccion de llegada:", direccion2)

valorDelViaje()