// SE SOLICITA PRIMER NUMERO AL CLIENTE
let numero1 = parseInt(prompt("Ingrese primer numero")); // CON 'parseInt' convertimos el numero entero .
// SE SOLICITA UN SEGUNDO NUMERO AL CLIENTE
let numero2 = parseInt(prompt("Ingrese segundo numero")); // Nuevamente con 'ParseInt' convertiremos el numero a entero .

// DECLARACIONES DE RESULTADOS DE LAS OPERACIONES MATEMATICAS .
// Declaramos una variable con el resultado de la suma.
let suma = numero1 + numero2;
//declaramos una variable con el resultado de la resta
let resta = numero1 - numero2;
//declaramos una variable con el resultado de la multiplicacion
let multiplicacion = numero1 * numero2;
//declaramos una varaible con el restulado de la division
let division = numero1 / numero2;
//declaramos una variable con el resultado del modulo
let modulo = numero1 % numero2;

// Acá les mostraremos los resultados al cliente a la consola.
console.log(`Los resultados de las operaciones son :
 La suma de los numero : ${suma}
 La resta de los numero: ${resta}
 La multiplicacion de los numeros: ${multiplicacion} 
 La division de los numeros: ${division}
 El modulo de los numeros : ${modulo}
 `);

 //Acá termina el calculo de los operadores matematicos .