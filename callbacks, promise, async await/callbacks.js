let carros = ["ferrari", "tesla", "lamborghini"];

let num = [1, 2, 3, 4, 5];

/* para ejecutar un callback con una funcion lo ideal
es crear la funcion como un parametro de la funcion forEach()  */

//esto es un callback
function sumar(num) {
  console.log(num + 2);
}

//esto es un callback
function restar(num) {
  console.log(num - 2);
}

//aqui se ejecuta el callback (dentro del metodo forEach)
num.forEach(restar);
num.forEach(sumar);

/*una mejor forma de tener la funcion como parametro es la siguiente.
y es exactamente lo mismo que la parte de arriba pero con mejor sintaxis.
aqui se esta declarado una funcion sin nombre */
num.forEach(function restar(num) {
  console.log(num - 2);
});

function sumarUno(array) {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] + 1);
  }
  return nuevoArray;
}

console.log(sumarUno(num));

function restarUno(array) {
  let nuevoArray2 = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray2.push(array[i] - 1);
  }
  return nuevoArray2;
}

// console.log(restarUno(num));

function multiplicar(array) {
  let array3 = [];
  for (let i = 0; i < array.length; i++) {
    array3.push(array[i] * 2);
  }
  return array3;
}
// console.log(multiplicar(num));

// crear un ciclo que imprima cada elemento del array + 2
let numeros = [10, 11, 12, 13, 14, 15];

function arrayMas2(numeros) {
  console.log(numeros + 2);
}
numeros.forEach(arrayMas2);

//crear un ciclo que imprima numeros del 15 al 30
for (let i = 15; i < 31; i++) {
  console.log(i);
}
//crear un ciclo que imprima par si el numero es par e impar si el numero es impar
let numeros2 = [2, 4, 6, 1, 3, 5, 11, 99, 88, 55, 30];
function pares(numeros2) {
  for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] % 2 === 0) {
      console.log(` el numero ${numeros2[i]} es par`);
    } else {
      console.log(` el numero ${numeros2[i]} es impar`);
    }
  }
}
pares(numeros2);

// resuelve el ejercicio anterior con forEach

numeros2.forEach((num) => {
  if (num % 2 === 0) {
    console.log(` el numero ${num} es par`);
  } else {
    console.log(` el numero ${num} es impar`);
  }
});

// usa filter para mostrar solo numeros pares
// filter te devuelve otro array con los datos filtrados

let numerosPares = numeros2.filter((num) => {
  if (num % 2 === 0) {
    console.log(`el numero ${num} es par`);
  }
});
