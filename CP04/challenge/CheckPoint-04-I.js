// Ejercicio 1: Utilizar una declaración if para determinar si un número es positivo o negativo.
let resultado1="";
let numero = 1;
// Escribí tu código acá abajo:
if(numero >0 ){
   resultado1="positivo";
}else if (numero < 0) {
   resultado1="negativo";
}else{
   resultado1=0;
}
// Ejercicio 2: Utilizar una declaración if para determinar si un número es par o impar.
// Escribí tu código acá abajo:
let numero2= 2;
let resultado2="";
if(numero2 % 2 === 0){
    resultado2 = "par"
}else{
  resultado2 = "impar"
}

// Ejercicio 3: Utilizar una declaración if para determinar si un número es mayor, menor o igual a otro.
let numero3= 2;
let numero4= 2;
let resultado3="";
// Escribí tu código acá abajo:
if(numero3 > numero4 ){
  resultado3="mayor";
}else if (numero < 0) {
  resultado3="menor";
}else{
  resultado3= "igual";
}

// Ejercicio 4: Utilizar una declaración if para verificar si una persona es mayor de edad (mayor o igual a 18 años).
let mayor= 18
let resultado4="";
// Escribí tu código acá abajo:
if (mayor >= 18){
  resultado4= "mayor de edad";
}else{
  resultado4= "menor de edad";
}

// Ejercicio 5: Utilizar una declaración if para determinar si un número es divisible por 3 y 5 al mismo tiempo.

// Escribí tu código acá abajo:
{
  let div1 = 3 ;
  let div2 = 5;
  let num = 999999999996;
  let valida = 0;
  let resultado5="";

  let array = num.toString().split("");
      console.log(` Valida = ${array}`);

  for(let i = 0 ; i < array.length; i++){
      valida+= parseInt(array[i]);
  }

  let esMultiplo1 = valida/div1;
  let esMultiplo2 = valida/div2;

  if( (esMultiplo1 % 2 !== 0  ) && (esMultiplo2 % 2 !== 0) ){
    resultado5= "divisible por 3 y 5";
  }else{
    resultado5= "no es divisible por 3 y 5";
  }


}

// Ejercicio 6: Utilizar una declaración if para determinar si una letra es una vocal.
let letra = "a"
let vocales = "aáeéiíoóuú";
let resultado6="";
// Escribí tu código acá abajo:

if( letra.includes(vocales)){
  resultado6= " vocal"
}else{
  resultado6= "no vocal"
}

// Ejercicio 7: Utilizar una declaración if para determinar si una persona puede votar (mayor de 18 y ciudadano).
let edadPersona= 18
let resultado7="";
// Escribí tu código acá abajo:
if (edadPersona >= 18){
  resultado4= "puede votar";
}else{
  resultado4= "no puede votar";
}

// Ejercicio 8: Utilizar una declaración if para determinar si un número es positivo o cero.
let num8 = 10;
let resultado8 ="";
// Escribí tu código acá abajo:
if( num8 > 0 ){
  resultado8 ="positivo";
}else if(num8 == 0){
  resultado8 ="cero";
} else{
  resultado8 ="negativo";
}
// Ejercicio 9: Utilizar una declaración if para determinar si un número es mayor que 10 y menor que 20.
let resultado9 ="";
let num9= 11;
// Escribí tu código acá abajo:
  if(num9 >= 10 || num <= 20){
      resultado9= "mayor que 10 y menor que 20";
  }else{
    resultado9= "no es mayor que 10 y menor que 20";
  }

// Ejercicio 10: Utilizar una declaración if para determinar si una persona puede conducir (mayor de 16 y tiene licencia).
let conductor= 18
let resultado10="";
let tienenLicencia= true;
// Escribí tu código acá abajo:
if (conductor >= 16 && tienenLicencia){
  resultado4= "puede votar";
}else{
  resultado4= "no puede votar";
}


// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  resultado1,
  resultado2,
  resultado3,
  resultado4,
  resultado5,
  resultado6,
  resultado7,
  resultado8,
  resultado9,
  resultado10,
};
