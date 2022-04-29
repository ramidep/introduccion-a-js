// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

//Funcion sumar
function sumar(numero1, numero2){
    return numero1 + numero2;
};
//Funcion restar
function restar(numero1, numero2){
    return numero1 - numero2;
};
//Funcion multiplicar
function multiplicar(numero1, numero2){
    return numero1 * numero2;
};
//Funcion dividir
function dividir(numero1, numero2){
    return numero1 / numero2;
};
//Funcion realizar operacion
function realizarOperacion(){
    //Crear variables numero1 y numero2
    let numero1 = Number(prompt("Ingrese un primer valor"));
    let numero2 = Number(prompt("Ahora un segundo valor"));
    //Crear variable operador
    let operador = prompt("Que operacion desea realizar? +, - , *, /");
    //Crear variable resultado
    let resultado;
    //Si el operador es +, -, *, /, realizar la funcion que corresponda y mostrar el resultado
    if (operador == "+"){
        resultado = sumar(numero1, numero2);
        console.log(resultado);
        alert("El resultado es: " + resultado);
    }else if (operador == "-"){
            resultado = restar(numero1, numero2);
            console.log(resultado);
            alert("El resultado es: " + resultado);
    }else if (operador == "*"){
            resultado = multiplicar(numero1, numero2);
            console.log(resultado);
            alert("El resultado es: " + resultado);
    }else if (operador == "/"){
            resultado = dividir(numero1, numero2);
            console.log(resultado);
            alert("El resultado es: " + resultado);
    }else {
        //Si no entonces decir que el operador no es valido y que realize la funcion nuevamente
        console.log("Operador no valido");
        alert("Lo siento, pero ese valor no es +, - , * , / . Por favor intente nuevamente");
        realizarOperacion();
    };
};
//Poner en marcha la funcion realizar operacion
realizarOperacion();