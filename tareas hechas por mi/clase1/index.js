// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
function calcularEdad(anioactual, anionacimiento){
    return anioactual - anionacimiento;
};
let anioactual = prompt("En que anio estamos?");
let anionacimiento = prompt("Y en que anio naciste?");
let resultado = calcularEdad(anioactual, anionacimiento);
console.log(resultado);
alert("Tenes aproximadamente " + resultado + " anios");
// Preguntar el salario anual y calcular el salario mensual
function calcularSalarioMensual(salarioPorAnio){
    const mesesPorAnio = 12;
    let salarioPorMes = salarioPorAnio / mesesPorAnio;
    console.log(salarioPorMes);
    alert("Ganas " + salarioPorMes + " al mes"); 
};
let salarioAnual = prompt("Cuanto dinero ganas al anio?");
calcularSalarioMensual(salarioAnual);
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.
function calcularSalario(salarioMensual, horasTrabajadas, DiasDeTrabajo){
    const mesesporAnio = 12;
    const semanasPorMes = 4;
    const minutosPorHora = 60;
    const segundosPorMinuto = 60;
    let salarioPorAnio = salarioMensual * mesesporAnio;
    let salarioPorSemana = salarioMensual / semanasPorMes;
    let salarioPorDia = salarioPorSemana / DiasDeTrabajo;
    let salarioPorHora = salarioPorDia / horasTrabajadas;
    let salarioPorMinuto = salarioPorHora / minutosPorHora;
    let salarioPorSegundo = salarioPorMinuto / segundosPorMinuto;
    let salarioTotal = "Ok segun mis calculos ganas aproximadamente " + salarioPorAnio + " por anio, " + salarioAlMes + " por mes, " + salarioPorSemana + " por semana, " + salarioPorDia + " por dia, " + salarioPorHora + " por hora, " + salarioPorMinuto + " por minuto, y " + salarioPorSegundo + " por segundo.";
    console.log(salarioTotal);
    alert(salarioTotal);
};
let salarioAlMes = prompt("Cuanto ganas al mes?");
let horasDeTrabajo = prompt("Cuantas horas trabajas al dia?");
let DiasDeTrabajo = prompt("Cuantos dias trabajas a la semana?")
calcularSalario(salarioAlMes, horasDeTrabajo, DiasDeTrabajo);