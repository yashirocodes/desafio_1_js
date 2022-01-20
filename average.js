// Se le pide al cliente que ingrese 5 numeros
let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));
let numero4 = parseInt(prompt("ingrese el cuerto numero"));
let numero5 = parseInt(prompt("ingrese el quinto numero"));

//se hace la suma de todos los numeros.
let suma = numero1 + numero2 + numero3 + numero4 + numero5;
//se saca el promedio del resultado de la suma 
let promedio = suma / 5 ;

// Se muestran los resultados al cliente 
console.log(`El resultado es el sigueinte : 
Suma de los numeros ${suma}
Promedio de los numeros  ${promedio}
`);
