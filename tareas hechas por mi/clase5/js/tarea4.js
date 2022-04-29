//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//declarar constantes lista de numeros, resultado y array numeros
const listaNumeros = document.querySelectorAll("li");
const resultado = document.querySelectorAll("em");
const arrayNumeros = [];
//agregar al array cada elemento de la lista de numeros
for(let i=0; i<listaNumeros.length; i++){
    arrayNumeros.push(Number(listaNumeros[i].innerText));
};
//calcular el total y luego el promedio para mostrarlo
let total = 0;
for (let i=0; i<arrayNumeros.length; i++){
    total = total + arrayNumeros[i];
};
let promedio = total / arrayNumeros.length;
resultado[0].textContent =  `El promedio es ${promedio}.`;
//obtener el menor numero y mostrarlo
let menorNumero = arrayNumeros[0];
for (let i=0; i<arrayNumeros.length; i++){
    if (arrayNumeros[i] < menorNumero){
        menorNumero = arrayNumeros[i];
    };
};
resultado[1].textContent = `El numero mas pequenio es ${menorNumero}.`;
//obtener el mayor numero y mostrarlo
let mayorNumero = arrayNumeros[0];
for (let i=0; i<arrayNumeros.length; i++){
    if (arrayNumeros[i] > mayorNumero){
        mayorNumero = arrayNumeros[i];
    };
};
resultado[2].textContent = `El numero mas grande es ${mayorNumero}.`;
//obtener el numero que mas se repite y mostrarlo
resultado[3].textContent = `El numero que mas se repite es el...`
    
