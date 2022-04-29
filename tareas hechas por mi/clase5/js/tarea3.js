//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//declarar constantes de boton enviar, boton calcular y el body
const botonEnviar = document.querySelector("#boton-enviar");
const botonCalcular = document.querySelector("#boton-calcular");
const nodoBody = document.querySelector("body");
//al hacer click en el boton enviar se crean los input, se activa el boton calcular y se desactivan el boton enviar y el input cantidad de clases
botonEnviar.onclick = function(){
    let cantidadClases = document.querySelector("#cantidad-clases");
    for(let i=1; i<=cantidadClases.value; i++){
        let inputHoras = document.createElement("input");
        let inputMinutos = document.createElement("input");
        let inputSegundos = document.createElement("input");
        inputHoras.setAttribute("id", `horas${i}`);
        inputHoras.setAttribute("type", "number");
        inputHoras.setAttribute("placeholder", `horas clase ${i}`);
        inputMinutos.setAttribute("id", `minutos${i}`);
        inputMinutos.setAttribute("type", "number");
        inputMinutos.setAttribute("placeholder", `minutos clase ${i}`);
        inputSegundos.setAttribute("id", `segundos${i}`);
        inputSegundos.setAttribute("type", "number");
        inputSegundos.setAttribute("placeholder", `segundos clase ${i}`);
        nodoBody.appendChild(inputHoras);
        nodoBody.appendChild(inputMinutos);
        nodoBody.appendChild(inputSegundos);
    };
    botonCalcular.disabled = false;
    botonEnviar.disabled = true;
    cantidadClases.disabled = true;
    return false;
};
//al hacer click en el boton calcular se suman todos los datos de las clases y se muestra el tiempo total
botonCalcular.onclick = function(){
    let cantidadClases = document.querySelector("#cantidad-clases");
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    for(i=1; i<=cantidadClases.value; i++){
        horas = horas + Number(document.querySelector(`#horas${i}`).value);
        minutos = minutos + Number(document.querySelector(`#minutos${i}`).value);
        segundos = segundos + Number(document.querySelector(`#segundos${i}`).value);
    };
    let resultado = document.querySelector("#resultado");
    resultado.innerText = `horas: ${horas}, minutos: ${minutos}, segundos: ${segundos}`;
    return false;
};
