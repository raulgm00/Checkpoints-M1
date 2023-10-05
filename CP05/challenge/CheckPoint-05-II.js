// Ejercicio 1: Definir una función que determine si un número es primo.
function esPrimo1(numero) {
  // Escribí tu código acá abajo:
    if(numero %2 !== 0){
      return true;
    }
}

// Ejercicio 2: Definir una función que encuentre el máximo común divisor (MCD) de dos números.
function calcularMCD2(a, b) {
  // Escribí tu código acá abajo:
  let temporal;
  while(b !== 0 ){
    temporal =b ;
    b = a % b ;
    a = temporal;
  }
  return a;
}

// Ejercicio 3: Definir una función que genere un número aleatorio en un rango dado.
function numeroAleatorio3(min, max) {
  // Escribí tu código acá abajo:
    return Math.random() * (max-min) + min ;
}

// Ejercicio 4: Definir una función que cuente la cantidad de palabras en una cadena de texto.
function contarPalabras4(cadena) {
  // Escribí tu código acá abajo:
   let array = cadena.split(" ");
   return array.length;
}

// Ejercicio 5: Definir una función que invierta una cadena de texto.
function invertirCadena5(cadena) {
  // Escribí tu código acá abajo:
    let divideCadena = cadena.split("");
    let invierteCadena = divideCadena.reverse();
    return invierteCadena.join("");
}

// Ejercicio 6: Definir una función que encuentre el número mayor en un array de números.
function encontrarNumeroMayor6(arr) {
  // Escribí tu código acá abajo:
    let numeroPOrdenados = arr.sort((a,b) => a-b);
    return numeroPOrdenados[numeroPOrdenados.length-1];

}

// Ejercicio 7: Definir una función que elimine los elementos duplicados de un array.
function eliminarDuplicados7(arr) {
  // Escribí tu código acá abajo:
  const unicos = [... new Set (arr)];
  return unicos;
}

// Ejercicio 8: Definir una función que ordene un array de números de forma ascendente.
function ordenarAscendente8(arr) {
  // Escribí tu código acá abajo:
    return arr.sort((a,b) => a-b );
}

// Ejercicio 9: Definir una función que calcule la suma de los dígitos de un número.
function sumaDigitos9(numero) {
  // Escribí tu código acá abajo:
  const arrayNumber = String(numero).split("").map( numero => parseInt(numero));
  let total = 0;
  arrayNumber.forEach( numero => total+=numero );
  return total;

  /*
    let numeros = [1, 2, 3, 4, 5];
    let total = numeros.reduce((a, b) => a + b, 0);
    console.log(total);
  */

}

// Ejercicio 10: Definir una función que determine si una cadena de texto es un palíndromo.
function esPalindromo10(cadena) {
  // Escribí tu código acá abajo:
  //Un caracter NO alfanumérico, es cualquier símbolo que no sea ni una letra ni un número
  let ex = /[\W_]/g;
  let tmp = cadena.toLowerCase().replace(ex, '');
  cadena = tmp.split('').reverse().join(''); 
  if(cadena === tmp){
    return true;
  }else{
    return false;
  }
  
}

// Exporta las funciones para que estén disponibles para otros módulos
module.exports = {
  esPrimo1,
  calcularMCD2,
  numeroAleatorio3,
  contarPalabras4,
  invertirCadena5,
  encontrarNumeroMayor6,
  eliminarDuplicados7,
  ordenarAscendente8,
  sumaDigitos9,
  esPalindromo10,
};
