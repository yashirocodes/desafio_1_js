//Se le pide al cliente ingresar la temperatura en grados celcius
let gradosCelcuis = parseInt(
  prompt("Ingrese la temperatura en Grados Celcius ° <- ")
);

// Se hace el calculo para tranformar de grados Celcius a Kelvin
let kelvin = gradosCelcuis + 273.15;
// Se hace el calculo para transformar de grados Celcius a Farenheit
let farenheit = (gradosCelcuis * 9) / 5 + 32;

//mostramos al cliente los resultados de las operaciones de conversion .
console.log(`La conversion de los grados celcius ingrsados ${gradosCelcuis} :
    En grados Kelvin ${kelvin}
    En Grados Farenheit ${farenheit}
`);