function saludar(){
    console.log("Bienvenido a Milo Sistema de Prestamos");
}
function menu(){
    console.log("Menu de opciones", "\n 1 - Mostrar Prestamos Disponibles", "\n 2 - Consultar disponibilidad", "\n 3 - Solicitar Prestamo", "\n 4 - Registrarse");
}
saludar();
menu();

let opcion = prompt("Ingrese una opcion del 1 al 4");
function elegir(opcion){
    const prestamos =  [{id: 1, nombre: "flexible"}, {id: 2, nombre: "compuesto"}, {id: 3, nombre: "unidades indexadas"}];
    if (opcion == 1) {
            for(let i=0;i<prestamos.length;i++){
                console.log("Los tipos de prestamos son: " + prestamos[i].nombre);
            }
    }
    else if (opcion == 2){
       let monto = prompt("Ingrese el monto a solicitar:");
       let cuotas = prompt("Ingrese la cantidad de cuotas a solicitar:");
       if (monto <= 10000 && cuotas <= 24){
        console.log("Por el monto ud califica para un prestamo flexible");
       } 
       else if (monto <= 50000 && cuotas <= 48) {
        console.log("Ud deberia de pedir un prestamo compuesto");
       }
       else {
        console.log("Ud deberia de consultar por un prestamo en unidades indexadas")
       }
    }
    else if(opcion == 3){
        const usuariosAprobados = [{nombre: "mathias", Apellido: "diaz"}, {nombre: "soledad", Apellido: "calvo"}, {nombre: "leo", Apellido: "biurra"}];
        let nombre = prompt("Ingrese su nombre").toLowerCase();
        let apellido = prompt("Ingrese su apellido").toLowerCase();
        for (let i = 0; i<usuariosAprobados.length;i++){
            if(nombre == usuariosAprobados[i].nombre && apellido == usuariosAprobados[i].Apellido){
                console.log("Ud" + " " +  usuariosAprobados[i].nombre + " " + usuariosAprobados[i].Apellido + " " + "esta habilitado para solicitar un prestamo");
            }
            else {
                console.log("Ud" + " "  + nombre + " " + apellido + " " + "NO" + " " + "esta habilitado para solicitar un prestamo");
            }
        }
    }
    else if(opcion == 4){
        const usuariosRegistrados = [];
        let nombreRegistro = prompt("Ingrese su nombre");
        let apellidoRegistro = prompt("Ingrese su apellido");
        const datosRegistrados = {nombre: nombreRegistro, apellido: apellidoRegistro};
        usuariosRegistrados.push(datosRegistrados);
        console.log("Usuario" + " " + usuariosRegistrados[0].nombre + " " + usuariosRegistrados[0].apellido + " " +"registrado con exito");
    }
}
elegir(opcion);