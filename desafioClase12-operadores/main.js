function enviar(){
    class Usuario{
        constructor(nombre, edad){
            this.nombre = nombre
            this.edad = edad
        }
    }

    let nombre = document.getElementById("nombre").value
    let edad = parseInt(document.getElementById("edad").value)

    // const usuario1 = new Usuario(nombre, edad)
    // console.log(usuario1)
    // if (edad > 18) {
    //     alert("puede ingresar a la web")
    // } else {
    //     alert("no puede ingresar a la web")
    // }
    
    edad > 18 ? alert(nombre + " puede ingresar a la web") : alert(nombre + " no puede ingresar a la web")
}




