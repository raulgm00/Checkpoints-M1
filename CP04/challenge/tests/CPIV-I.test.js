// Prueba 1: Verificar resultado1
test("Prueba: Resultado 1", () => {
  expect(resultado1).toBe("positivo");
});

// Prueba 2: Verificar resultado2
test("Prueba: Resultado 2", () => {
  expect(resultado2).toBe("par");
});

// Prueba 3: Verificar resultado3
test("Prueba: Resultado 3", () => {
  expect(resultado3).toBe("mayor");
});

// Prueba 4: Verificar resultado4
test("Prueba: Resultado 4", () => {
  expect(resultado4).toBe("mayor de edad");
});

// Prueba 5: Verificar resultado5
test("Prueba: Resultado 5", () => {
  expect(resultado5).toBe("divisible por 3 y 5");
});

// Prueba 6: Verificar resultado6
test("Prueba: Resultado 6", () => {
  expect(resultado6).toBe("vocal");
});

// Prueba 7: Verificar resultado7
test("Prueba: Resultado 7", () => {
  expect(resultado7).toBe("puede votar");
});

// Prueba 8: Verificar resultado8
test("Prueba: Resultado 8", () => {
  expect(resultado8).toBe("negativo");
});

// Prueba 9: Verificar resultado9
test("Prueba: Resultado 9", () => {
  expect(resultado9).toBe("mayor que 10 y menor que 20");
});

// Prueba 10: Verificar resultado10
test("Prueba: Resultado 10", () => {
  expect(resultado10).toBe("puede conducir");
});

// Importa las variables desde el archivo de ejercicios
const {
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
} = require("../CheckPoint-04-I.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios
