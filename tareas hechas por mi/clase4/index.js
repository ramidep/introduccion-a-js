// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

//Imprimir cada 3er número del 3 al 22
for (let i = 1; i < 8; i++){
    console.log(i*3);
};
//Registrar los numeros de diez a uno
let i = 10;
while(i >= 1){
    console.log(i);
    i = i - 1;
};
//FizzBuzz
for (let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 5 != 0){
        console.log(i + " Fizz");
    }else if(i % 5 == 0 && i % 3 != 0){
        console.log(i + " Buzz");
    }else if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " FizzBuzz");
    }else{
        console.log(i);
    };
};
//Calcular el promedio de todos los numeros en un array en una funcion
function calcularPromedio(numeros){
    let total = 0;
    for (let i = 0; i < numeros.length; i++){
        total = total + numeros[i];
    };
    let promedio = total / numeros.length;
    return promedio;
};
let numerosPrueba = [10,5,4,2,8];
console.log(calcularPromedio(numerosPrueba));