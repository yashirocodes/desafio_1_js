//Se le pide al cliente que ingrese la cantidad de días que quiere calcular .

let totalDays = parseInt(prompt("ingrese total de días a calcular"));

//Se hacen los calculos para desglosar la informacion que requiere el usuario
//Se calculan cuantos años contiene el numero ingresado por el cliente
let years = Math.floor(totalDays / 365);
//se calculan cuantas semanas sobran del numero ingresado
let week = Math.floor((totalDays % 365) / 7);
//se calculan cuantos dias sobran
let days = Math.floor((totalDays % 365) % 7);

// Se muestran los resultados al cliente 
console.log(`El resultado es el sigueinte : 
Años ${years}
Semanas ${week}
Días ${days}
`);
