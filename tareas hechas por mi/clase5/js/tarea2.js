//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

//declarar la constante boton ingresar
const botonIngresar = document.querySelector("#boton-ingresar");
//al hacer click en el boton ingresar se muestra un mensaje de bienvenido y todos los datos
botonIngresar.onclick = function(){
  let bienvenido = document.querySelector("#bienvenido");
  let nombreUsuario = document.querySelector("#nombre-usuario");
  let segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario");
  let apellidoUsuario = document.querySelector("#apellido-usuario");
  let edadUsuario = document.querySelector("#edad-usuario");
  let resultado = document.querySelector("#resultado");
  bienvenido.textContent = `Bienvenido ${nombreUsuario.value}`;
  resultado.textContent = `${nombreUsuario.value} ${segundoNombreUsuario.value} ${apellidoUsuario.value} ${edadUsuario.value}`;
  return false;
};