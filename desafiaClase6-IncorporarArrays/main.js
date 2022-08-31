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