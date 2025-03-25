// 1 - Bego necesita un generador de contraseñas. Debe crear 3 contraseñas únicas usando letras mayúsculas, minúsculas, números y símbolos. Cada contraseña debe tener 8 caracteres, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
// Ejemplo salida: ['aB9$Rty1', 'Cz7%Qw2$', 'Xy8&Re9P']

const generatePassword = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < 8; i++) {
    randomPosition = Math.floor(Math.random() * characters.length);
    randomCharacter = characters.charAt(randomPosition);
    password = password + randomCharacter;
  }
  return password;
};

const getVariousPasswords = () => {
  const randomPasswords = []; //Aqui es un const, porque no modifico la estructura, cambio el contenido de la estructura.
  for (let i = 0; i < 3; i++) {
    const password = generatePassword();
    randomPasswords.push(password);
  }
  console.log(randomPasswords);
};
getVariousPasswords();
// 2 - Macarena quiere hacer un filtro de palabras. Tiene un array con palabras mezcladas y quiere devolver un nuevo array solo con las que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: ['Agua', 'Elefante', 'Oruga']

const getWordsWithVowels = () => {};
getWordsWithVowels();
// 3 - Bego está calculando la media aritmética de un array de números. Debe mostrar el promedio y el total de elementos en el array.
// Ejemplo entrada: [5, 10, 15, 20]
// Ejemplo salida: Promedio: 12.5 - Total de elementos: 4

// 4 - Camila quiere invertir un array sin usar el método .reverse(). El array debe mostrarse al revés y ser un nuevo array diferente al original.
// Ejemplo entrada: [1, 2, 3, 4]
// Ejemplo salida: [4, 3, 2, 1]

// 5 - Bego está organizando números. Tiene un array de números positivos y negativos y quiere separarlos en dos arrays: uno con positivos y otro con negativos.
// Ejemplo entrada: [3, -2, -7, 4, 0, -1, 5]
// Ejemplo salida: Positivos: [3, 4, 0, 5] - Negativos: [-2, -7, -1]

// 6 - Macarena necesita una función que genere un array con números del 1 al 100 que sean divisibles por 5 pero no por 3.
// Ejemplo salida: [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]

// 7 - Abby quiere transformar un array de strings en un único string separado por comas, pero ignorando las palabras que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: 'Pan, Mesa'

// 8 - Bego tiene un array con números y debe devolver un nuevo array con solo los números impares multiplicados por 2.
// Ejemplo entrada: [3, 6, 9, 12, 15]
// Ejemplo salida: [6, 18, 30]

// 9 - Sabrina quiere crear un sistema para clasificar números. Recibe un array y debe mostrar cuántos son pares, cuántos son impares y cuántos son cero.
// Ejemplo entrada: [0, 3, 6, 9, 12, 0]
// Ejemplo salida: Pares: 2 - Impares: 3 - Ceros: 2

// 10 - Camila quiere un sistema que reciba un array de nombres y devuelva un array nuevo con las posiciones donde aparecen nombres con más de 5 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Esteban', 'María', 'Begoña']
// Ejemplo salida: [2, 4]

// 11 - Macarena quiere generar un código de seguridad que se crea uniendo la primera letra de cada palabra en un array de frases.
// Ejemplo entrada: ['Fuego en el bosque', 'Refugio seguro', 'Suministros esenciales']
// Ejemplo salida: 'FRS'

// 12 - Bego quiere hacer un sistema que reciba dos arrays de números y devuelva un array con los números que aparecen en ambos arrays.
// Ejemplo entrada: [1, 2, 3, 4] y [3, 4, 5, 6]
// Ejemplo salida: [3, 4]

// 13 - Camila necesita generar un array que contenga todos los números entre dos números dados, inclusive.
// Ejemplo entrada: 5 y 10
// Ejemplo salida: [5, 6, 7, 8, 9, 10]

// 14 - Macarena quiere un programa que devuelva el número total de vocales en cada palabra de un array.
// Ejemplo entrada: ['Hola', 'Mundo', 'JavaScript']
// Ejemplo salida: [2, 2, 3]

// 15 - Bego quiere que cada string en un array se muestre al revés.
// Ejemplo entrada: ['Hola', 'Mundo']
// Ejemplo salida: ['aloH', 'odnuM']
