// Ejercicio 1: Definir una función que calcule el enésimo término de la secuencia de Fibonacci.
function fibonacci1(n) {
  // Escribí tu código acá abajo:
    const fib = [0,1];
    for(let i = 2; i <= n; i++){
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

// Ejercicio 2: Definir una función que devuelva un objeto con las estadísticas de una lista de números.
function estadisticas2(lista) {
  // Escribí tu código acá abajo:
  
  return{
    suma: lista.reduce( (a,b) => a+b ,0 ),
    minimo: lista.sort((a,b) => a-b).shift() ,
    maximo: lista.sort( (a,b) => b-a).shift() ,
    promedio: lista.reduce( (a,b) => a+b ,0 ) / lista.length,
  }
}

// Ejercicio 3: Definir una función que simule el lanzamiento de un dado n veces y devuelva los resultados.
function lanzarDado3(n) {
  // Escribí tu código acá abajo:
  const arr = [0];
  let i= 0;
  do{
    arr[i] = Math.random()*(6-1)+1;
    i++;
    n--;
  }while(n > 0)
  return arr;
}

// Ejercicio 4: Definir una función que determine si una cadena de texto contiene todas las vocales.
function contieneTodasLasVocales4(cadena) {
  // Escribí tu código acá abajo:
  const vocales = 'aeiou';
  let cantidadVocales = 0;
  for(const letra of cadena){
    console.log(letra);
    if(vocales.includes(cadena.toLowerCase())){
      cantidadVocales++;
    }
  }
  console.log(cantidadVocales);
  return cantidadVocales == vocales.length ? true: false;
}


// Ejercicio 5: Definir una función que encuentre la subcadena más larga de una cadena de texto sin caracteres repetidos.
function subcadenaSinRepetir5(cadena) {
  // Escribí tu código acá abajo:
  const unicos = [... new Set (cadena)];
  return unicos.join('');
}

// Ejercicio 6: Definir una función que devuelva la suma de los números primos menores o iguales a n.
function sumaPrimosMenoresOIguales6(n) {
  // Escribí tu código acá abajo:
}

// Función auxiliar para verificar si un número es primo (usada en el Ejercicio 6).
function esPrimo(numero) {
  // Escribí tu código acá abajo:
}

// Ejercicio 7: Definir una función que devuelva el número de formas en que se puede subir una escalera de n escalones
// si solo se puede subir 1 o 2 escalones a la vez.
function formasDeSubirEscalera7(n) {
  // Escribí tu código acá abajo:
}

// Ejercicio 8: Definir una función que determine si un número es un cuadrado perfecto.
function esCuadradoPerfecto8(numero) {
  // Escribí tu código acá abajo:
}

// Ejercicio 9: Definir una función que encuentre el número k en la secuencia de Fibonacci que tenga n dígitos.
function encontrarFibonacciConNDigitos9(n) {
  // Escribí tu código acá abajo:
}

// Ejercicio 10: Definir una función que devuelva la suma de los dígitos de 2^n (potencia de 2).
function sumaDigitosPotenciaDeDos10(n) {
  // Escribí tu código acá abajo:
}

// Exporta las funciones para que estén disponibles para otros módulos
module.exports = {
  fibonacci1,
  estadisticas2,
  lanzarDado3,
  contieneTodasLasVocales4,
  subcadenaSinRepetir5,
  sumaPrimosMenoresOIguales6,
  formasDeSubirEscalera7,
  esCuadradoPerfecto8,
  encontrarFibonacciConNDigitos9,
  sumaDigitosPotenciaDeDos10,
};
