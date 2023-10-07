// Ejercicio 1: Utilizar una declaración if...else if para determinar la calificación de un estudiante.
{
    let resultado1="";
    // Escribí tu código acá abajo:

    let calificacion= 6;
    if(calificacion < 6){
      resultado1 = "B";
    }else if(calificacion>=6){
      resultado1 = "A";
    }
}
// Ejercicio 2: Utilizar una declaración if...else if para determinar la categoría de un producto.
let resultado2="";
let categoria = 1;
// Escribí tu código acá abajo:
if(categoria > 1){
  resultado2="Intermedio";
}else if (categoria <= 0){
  resultado2="Baja";
}

// Ejercicio 3: Utilizar una declaración if...else if para determinar el tipo de descuento a aplicar.
let resultado3="";
let descuento = 40;
// Escribí tu código acá abajo:
if(descuento >= 50){
  resultado3 = 40;
}else if (categoria <= 0){
  resultado3= 20 ;
}

// Ejercicio 4: Utilizar una declaración if...else if para determinar el género de una película.
let resultado4="";
let genero = 1;
// Escribí tu código acá abajo:
if(genero === 1){
  resultado4 = "Película de aventura";
}else if (categoria <= 0){
  resultado3= "Sin clasificar" ;
}

// Ejercicio 5: Utilizar una declaración if...else if para determinar el rango de edad de una persona.
let resultado5="";
let edad = 18;
// Escribí tu código acá abajo:
if ( edad >= 0 && edad <= 17){
  resultado5 = "Adolecente";
}else if (edad >= 18 && edad <= 29){
  resultado5 = "Joven";
} else{
  resultado5 = "Adulto Mayor";
}


// Ejercicio 6: Utilizar una declaración if...else if para determinar el nivel de experiencia de un empleado.
let resultado6="";
let nivel = 10;
// Escribí tu código acá abajo:
if ( nivel >= 0 && nivel <= 4){
  resultado6 = "Junior";
}else if (nivel >= 5 && nivel <= 8){
  resultado6 = "Medio";
} else{
  resultado6 = "Avanzado";
}

// Ejercicio 7: Utilizar una declaración if...else if para determinar la estación del año según el mes.
let resultado7="";
let estacion = 3;
// Escribí tu código acá abajo:
if ( estacion >= 3 && estacion <= 6){
  resultado7 = "Primavera";
}else if (estacion >= 7 && estacion <= 9){
  resultado7 = "verano";
}else if (estacion >= 10 && estacion <= 12){
  resultado7 = "Otoño";
} else{
  resultado7 = "Invierno";
}



// Ejercicio 8: Utilizar una declaración if...else if para determinar el formato de un archivo según su extensión.
let resultado8="";
// Escribí tu código acá abajo:
let archivo = "imagen";
// Escribí tu código acá abajo:
if ( archivo === "imagen"){
  resultado8 = "Imagen JPEG";
}else if ( archivo === "txt"){
  resultado7 = "Archivo de Texto";
}else{
  resultado7 = "Sin extención";
}

// Ejercicio 9: Utilizar una declaración if...else if para determinar el tipo de fruta según su color.
let resultado9="";
// Escribí tu código acá abajo:
let colorFruta = "verde";
// Escribí tu código acá abajo:
if ( colorFruta == "rojo"){
  resultado9 = "Manzana";
}else if ( colorFruta == "amarillo"){
  resultado9 = "platano";
}else if (colorFruta == "verde"){
  resultado9 = "Kiwi";
} else{
  resultado9 = "Sin definir";
}

// Ejercicio 10: Utilizar una declaración if...else if para determinar el horario del día.
let resultado10="";
let hora = 14;
// Escribí tu código acá abajo:
if ( hora >= 0 && hora <= 13){
  resultado10 = "Mañana";
}else if (hora >= 14 && hora <= 20){
  resultado10 = "Tarde";
}else{
  resultado10 = "Noche";
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
