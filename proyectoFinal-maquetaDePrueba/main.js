////////prueba 1
// var direccion1 = prompt("Ingrese la direccion de partida")
// var direccion2 = prompt("Ingresa direccion de destino")
// var cantidadDeKM = prompt("Indique cantidad de KM")
// let valorKM = 80

// function valorDelViaje(){
//     const valorFinal = cantidadDeKM * valorKM;
//     console.log("El valor del viaje es:", "$" + valorFinal + ".-")
// }
// console.log("Direccion de partida:", direccion1)
// console.log("Direccion de llegada:", direccion2)

// valorDelViaje()



/////////////////////codigo random de prueba
// class Solicitud {
//     constructor(nombre, contacto, direccion){
//         this.nombre = nombre;
//         this.contacto = contacto;
//         this.direccion = direccion;
//     }
// }

// let remitente = new Solicitud ("Patricio","1134022326","Cabo Morando 2388")
// console.log(Solicitud)


// class Destino {
//     constructor(nombre, contacto, direccion){
//         this.nombre = nombre;
//         this.contacto = contacto;
//         this.direccion = direccion;
//     }
// }

// let destinatario = new Destino ("Miguel","1136041980", "Buchardo 1408")
// console.log(Destino)


/////////prueba 2
var nombreRemitente = prompt("Ingrese nombre de quien envia")
var direccionDePartida = prompt("Ingrese direccionde partida")
var telefonoRemitente = prompt("Ingrese telefono del remitente")

var nombreDestinatario = prompt("Ingrese nombre de quien reciba")
var direccionDestinatario = prompt("Ingrese direccion de destino")
var telefonoDestinatario = prompt("Ingrese telefono de quien recibe")

var cantidadDeKM = prompt("Indique cantidad de KM")

function valorDelViaje(){
    const valorFinal = cantidadDeKM * 80;
    console.log("El valor del viaje es:", "$" + valorFinal + ".-")
}

function Remitente(nombre, direccion, telefono){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
}

let remitente1 = new Remitente(nombreRemitente,direccionDePartida,telefonoRemitente)
console.log(remitente1)

function Destinatario(nombre, direccion, telefono){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
}

let destinatario1 = new Destinatario(nombreRemitente,direccionDePartida,telefonoRemitente)
console.log(destinatario1)

var valoresKM = [70,80,90];
console.log(valoresKM.length);
console.log(valoresKM)

valorDelViaje()