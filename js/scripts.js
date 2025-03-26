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

const filterWordsWithVowels = words => {
  const vowels = 'aeiouAEIOU';
  const wordswithVowels = [];
  for (const word of words) {
    if (vowels.includes(word.charAt(0))) {
      wordswithVowels.push(word);
    }
  }
  console.log(wordswithVowels);
};
filterWordsWithVowels(['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']);

// 3 - Bego está calculando la media aritmética de un array de números. Debe mostrar el promedio y el total de elementos en el array.
// Ejemplo entrada: [5, 10, 15, 20]
// Ejemplo salida: Promedio: 12.5 - Total de elementos: 4

const calculateAverage = numbers => {
  let additionResult = 0;
  for (const number of numbers) {
    //recorro los numeros del array y creo un sitio donde guardar el resultado
    additionResult += number; // /numbers.length > por qué no sale bien la división dentro?;
  }
  const averageResult = additionResult / numbers.length;
  console.log(averageResult);
};
calculateAverage([5, 10, 15, 20]);

// 4 - Camila quiere invertir un array sin usar el método .reverse(). El array debe mostrarse al revés y ser un nuevo array diferente al original.
// Ejemplo entrada: [1, 2, 3, 4]
// Ejemplo salida: [4, 3, 2, 1]

const getReversedArray = normalArray => {
  const reversedArray = [];
  for (let i = normalArray.length - 1; i >= 0; i--) {
    reversedArray.push(normalArray[i]);
  }
  console.log(reversedArray);
};
getReversedArray([1, 2, 3, 4]);

// 5 - Bego está organizando números. Tiene un array de números positivos y negativos y quiere separarlos en dos arrays: uno con positivos y otro con negativos.
// Ejemplo entrada: [3, -2, -7, 4, 0, -1, 5]
// Ejemplo salida: Positivos: [3, 4, 0, 5] - Negativos: [-2, -7, -1]

const filterBetweenPositivesAndNegatives = numbers => {
  const positiveNumbers = [];
  const negativeNumbers = [];
  for (const number of numbers) {
    if (number >= 0) {
      positiveNumbers.push(number);
    } else {
      negativeNumbers.push(number);
    }
  }
  console.log(`Positivos: ${positiveNumbers} - Negativos: ${negativeNumbers}`);
};
filterBetweenPositivesAndNegatives([3, -2, -7, 4, 0, -1, 5]);

// 6 - Macarena necesita una función que genere un array con números del 1 al 100 que sean divisibles por 5 pero no por 3.
// Ejemplo salida: [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]

const generateNumbersDivisibleByFive = () => {
  const numbersDivisibleByFive = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
      numbersDivisibleByFive.push(i);
    }
  }
  console.log(numbersDivisibleByFive);
};
generateNumbersDivisibleByFive();

// 7 - Abby quiere transformar un array de strings en un único string separado por comas, pero ignorando las palabras que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: 'Pan, Mesa'

const getSingleString = arrayOfStrings => {
  let singleString = ''; //Por qué se imprime vacío??
  const vowels = 'aeiouAEIOU';
  for (const word of arrayOfStrings) {
    if (vowels.includes(word.charAt(0))) {
      singleString += word + ',';
    }
  }
  console.log(singleString);
};
getSingleString(['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']);

// 8 - Bego tiene un array con números y debe devolver un nuevo array con solo los números impares multiplicados por 2.
// Ejemplo entrada: [3, 6, 9, 12, 15]
// Ejemplo salida: [6, 18, 30]

const getDoubleOddNumbers = everyNumber => {
  const doubleOddNumbers = [];
  for (const number of everyNumber) {
    if (number % 2 !== 0) {
      doubleOddNumbers.push(number * 2);
    }
  }
  console.log(doubleOddNumbers);
};
getDoubleOddNumbers([3, 6, 9, 12, 15]);

// 9 - Sabrina quiere crear un sistema para clasificar números. Recibe un array y debe mostrar cuántos son pares, cuántos son impares y cuántos son cero.
// Ejemplo entrada: [0, 3, 6, 9, 12, 0]
// Ejemplo salida: Pares: 2 - Impares: 2 - Ceros: 2

// *********/ORDEN LÓGICOS PARA ORDENAR:*********/
// -BOOLEANOS
// -NÚMEROS
// -STRINGS
// -ARRAY
// -OBJETOS

const classifyNumbers = numbersToClassify => {
  let even = 0;
  let odd = 0;
  let zeros = 0;
  for (const number of numbersToClassify) {
    if (number === 0) {
      zeros++; //zeros = zeros +1
    } else if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(`Pares: ${even} - Impares: ${odd} - Ceros: ${zeros}`);
};
classifyNumbers([0, 3, 6, 9, 12, 0]);

// 10 - Camila quiere un sistema que reciba un array de nombres y devuelva un array nuevo con las posiciones donde aparecen nombres con más de 5 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Esteban', 'María', 'Begoña']
// Ejemplo salida: [2, 4]

const getLargeNames = nameList => {
  const namePosition = [];
  for (let i = 0; i < nameList.length; i++) {
    //en este caso no se puede con for of porque necesito un inddx
    if (nameList[i].length > 5) {
      namePosition.push(i); //se que está mal
    }
  }
  //hola
  console.log(namePosition);
};
getLargeNames(['Pedro', 'Ana', 'Esteban', 'María', 'Begoña']);

// 11 - Macarena quiere generar un código de seguridad que se crea uniendo la primera letra de cada palabra en un array de frases.
// Ejemplo entrada: ['Fuego en el bosque', 'Refugio seguro', 'Suministros esenciales']
// Ejemplo salida: 'FRS'

// 12 - Bego quiere hacer un sistema que reciba dos arrays de números y devuelva un array con los números que aparecen en ambos arrays.
// Ejemplo entrada: [1, 2, 3, 4] y [3, 4, 5, 6]
// Ejemplo salida: [3, 4]

const getNumberInBothArrays = (firstList, secondList) => {
  const numbersInBothArrays = [];
  for (const firstNumber of firstList) {
    if (secondList.includes(firstNumber)) {
      //****CUIDADO CON EL ORDEN DE INCLUDES****
      numbersInBothArrays.push(firstNumber);
    }
  }
  console.log(numbersInBothArrays);
};
getNumberInBothArrays([1, 2, 3, 4], [3, 4, 5, 6]);
// 13 - Camila necesita generar un array que contenga todos los números entre dos números dados, inclusive.
// Ejemplo entrada: 5 y 10
// Ejemplo salida: [5, 6, 7, 8, 9, 10]

const getNumbersInBetween = (startingNumber, lastNumber) => {
  const numbersInBetween = [];
  for (let i = startingNumber; i <= lastNumber; i++) {
    numbersInBetween.push(i);
  }
  console.log(numbersInBetween); //no me acuerdo como se ponía entre medias.
};
getNumbersInBetween(5, 10);
// 14 - Macarena quiere un programa que devuelva el número total de vocales en cada palabra de un array.
// Ejemplo entrada: ['Hola', 'Mundo', 'JavaScript']
// Ejemplo salida: [2, 2, 3]

const getHowManyVowels = words => {
  const vowels = 'aeiouAEIOU';
  const howManyVowels = [];
  for (const word of words) {
    let amountofVowels = 0;
    for (const letter of word) {
      if (vowels.includes(letter)) {
        amountofVowels++;
      }
    }
    howManyVowels.push(amountofVowels);
  }
  console.log(howManyVowels);
};
getHowManyVowels(['Hola', 'Mundo', 'JavaScript']);
// 15 - Bego quiere que cada string en un array se muestre al revés.
// Ejemplo entrada: ['Hola', 'Mundo']
// Ejemplo salida: ['aloH', 'odnuM']

const getReversedWords = wordsList => {
  const reversedWords = [];
  for (const word of wordsList) {
    const reverseWord = word.split('').reverse().join('');
    reversedWords.push(reverseWord);
  }
  console.log(reversedWords);
};
getReversedWords(['Hola', 'Mundo']);
