// Ejercicio 1: Utilizar una declaración switch para determinar el día de la semana.

let dia1 = 3; // 1 representa lunes, 2 martes, etc.

let resultado1 = "";

// Escribí tu código acá abajo:
switch(dia1){
  case 1:
    resultado1 ="Lunes";
    break;
  case 2:
    resultado1 ="Martes";
    break;
  case 3:
    resultado1 ="Miércoles";
    break;
  case 4:
    resultado1 ="Jueves";
    break;
  case 5:
    resultado1 ="Viernes";
    break;
  case 6:
    resultado1 ="Sabado";
    break;
  default:
    resultado1 ="Domingo";

}

// Ejercicio 2: Utilizar una declaración switch para determinar el nombre del mes.

let mes2 = 6; // 1 representa enero, 2 febrero, etc.

let resultado2 = "";

// Escribí tu código acá abajo:
switch(mes2){
  case 1:
    resultado2 ="Enero";
    break;
  case 2:
    resultado2 ="Febrero";
    break;
  case 3:
    resultado2 ="Marzo";
    break;
  case 4:
    resultado2 ="Abril";
    break;
  case 5:
    resultado2 ="Mayo";
    break;
  case 6:
    resultado2 ="Junio";
    break;
  case 7:
    resultado2 ="Julio";
    break;
  case 8:
    resultado2 ="Agosto";
    break;
  case 9:
    resultado2 ="Septiembre";
    break;
  case 10:
    resultado2 ="Octubre";
    break;
  case 11:
    resultado2 ="Noviembre";
    break;
  default:
    resultado2 ="Diciembre";

}

// Ejercicio 3: Utilizar una declaración switch para determinar el tipo de vehículo.

let vehiculo3 = "moto";

let resultado3 = "";

// Escribí tu código acá abajo:
switch(vehiculo3){
  case "moto":
      resultado3 = "Vehículo motocicleta"
      break;
  case "auto":
    resultado3 = "Vehículo Automotor"
      break;
  default:
    resultado3 = "Sin definir"

}
// Ejercicio 4: Utilizar una declaración switch para determinar el día laboral.

let dia4 = "lunes";

let resultado4 = "";

// Escribí tu código acá abajo:
switch(dia4){
  case "lunes":
  case "Martes":
  case "Miercoles":
  case "Jueves":
  case "Viernes":
    resultado4 = "Día laboral";
    break;
  default:
    resultado4 = "No laboral";

}

// Ejercicio 5: Utilizar una declaración switch para determinar la dirección de un viento en grados.

let grados5 = 225;

let resultado5 = "";

// Escribí tu código acá abajo:
switch(grados5){
  case 0:
    resultado5 = "Norte";
    break;
  case 45:
    resultado5 = "Norteste";
    break;
  case 90:
    resultado5 = "Este";
    break;
  case 135:
    resultado5 = "Sureste";
    break;
  case 180:
    resultado5 = "Sur";
    break;
  case 225:
    resultado5 = "Suroeste";
    break;
  case 270:
    resultado5 = "Oeste";
    break;
  case 315:
    resultado5 = "Noreste";
    break;
  case 360:
    resultado5 = "Norte";
    break;
}

// Ejercicio 6: Utilizar una declaración switch para determinar el nivel de dificultad de un juego.

let nivel6 = "medio";

let resultado6 = "";

// Escribí tu código acá abajo:
switch(nivel6){
  case "facil":
    resultado6="Nivel Facil";
    break;
  case "medio":
    resultado6="Nivel Medio";
    break; 
  default:
    resultado6="Nivel Dificil";
}


// Ejercicio 7: Utilizar una declaración switch para determinar el tipo de animal.

let animal7 = "gato";

let resultado7 = "";

// Escribí tu código acá abajo:
switch(animal7){
  case "gato":
    resultado7 = "Mamífero";
    break;
  case "pajaros":
    resultado7 = "Ave";
    break;
  case "pez":
    resultado7 = "Pez";
    break;
  case "rana":
    resultado7 = "Anfibio";
    break;
  default:
    resultado7 = "Reptile";
    break;
  }

// Ejercicio 8: Utilizar una declaración switch para determinar la temporada según el mes.

let mes8 = "agosto";

let resultado8 = "";

// Escribí tu código acá abajo:
switch(mes8){
  case "diciembre":
  case "enero":
  case "febrero":
  case "marzo":
    resultado8 ="Invierno";
    break;
  case "abil":
  case "mayo":
  case "junio":
    resultado8 ="Primavera";
    break;
  case "julio":
  case "agosto":
  case "septiembre":
    resultado8 ="Verano";
    break;
  default:
    resultado8 ="Otoño";
}

// Ejercicio 9: Utilizar una declaración switch para determinar el tipo de tarjeta de crédito según el número.

let numeroTarjeta9 = "1234-5678-9012-3456";

let resultado9 = "";

// Escribí tu código acá abajo:
switch(numeroTarjeta9){
  case "1234-5678-9012-3456":
    resultado9= "Visa";
    break;
  default:
    resultado9= "Mastercard";
}

// Ejercicio 10: Utilizar una declaración switch para determinar el sistema operativo según el navegador.

let navegador10 = "Chrome";

let resultado10 = "";

// Escribí tu código acá abajo:
switch(navegador10){
  case "Chrome":
    resultado10 = "Windows";
    break;
  case "Firefox":
    resultado10 = "Linux";
    break;
  default:
    resultado10 = "Mac";
      
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
