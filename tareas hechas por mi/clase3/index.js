// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//Establecer constantes mi nombre y nombre de mi amigo
const miNombre = "ramiro";
const nombreAmigo = "ignacio";
//Preguntar por el nombre de usuario
let nombreUsuario = prompt("Cual es tu nombre?").toLowerCase();
//Si el nombre de usuario es mi nombre o el de mi amigo avisarle, sino simplemente saludar
if (nombreUsuario == miNombre){
    console.log("Se llama igual que yo");
    alert("Hola Ramiro, te llamas igual que yo!");
}else if (nombreUsuario == nombreAmigo){
    console.log("Se llama igual que mi amigo");
    alert("Hola Ignacio, te llamas igual que un amigo mio!");
}else {
    console.log("Hola " + nombreUsuario + "!");
};
//Establecer constante mi edad
miEdad = 20;
//Preguntar la edad al usuario
let edadUsuario = prompt("Ok " + nombreUsuario + ", cuantos anios tenes?");
//Si el usuario tiene mi misma edad o es mayor o menor que yo avisarle
if (edadUsuario == miEdad){
    console.log("Tiene mi edad");
    alert("Ok, " + nombreUsuario + " tenes " + edadUsuario + ", la misma edad que yo!");
}else if (edadUsuario > miEdad){
    console.log("Es mayor que yo");
    alert("Ok, " + nombreUsuario + " tenes " + edadUsuario + ", sos mayor que yo!");
}else {
    console.log("Es menor que yo");
    alert("Ok, " + nombreUsuario + " tenes " + edadUsuario + ", sos menor que yo!");
};
//Preguntarle al usuario si tiene documento
let tieneDocumento = prompt(nombreUsuario + ", tenes documento? (responde con si o no)").toLowerCase();
let edadMinima = 18;
if (tieneDocumento == "si"){
    //Si dice que si preguntarle la edad
    let edaddeUsuario = prompt("Ok " + nombreUsuario + ", cuantos anios tenes?");
    if (edaddeUsuario > edadMinima){
        console.log("puede pasar");
        alert("Ok " + nombreUsuario + ", podes pasar al bar, sos mayor de edad");
    }else if (edaddeUsuario < edadMinima){
        console.log("no puede pasar");
        alert("Ok " + nombreUsuario + ", lo siento pero no podes pasar al bar, sos menor de edad");
    }else {
        console.log("puede pasar");
        alert("Ok " + nombreUsuario + ", cumplis con la edad minima, por lo tanto podes pasar al bar");
    };
}else if(tieneDocumento == "no"){
    console.log("no puede pasar");
    alert("Ok " + nombreUsuario + ", lo siento pero no podes pasar al bar, no tenes documento");
}else {
    console.log("no se entiende");
    alert("Ok " + nombreUsuario + ", lo siento pero no te entendi");
};