/* SCOPE
 aqui se ve tema de scope ya que los let i declarados en diferentes funciones 
no se afectan entre si ya que trabajan en su propia funcion */
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

const s = [5, 7, 2];
function editInPlace() {
  // se les reasigno valores a cada elemento del array "s"
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

/*OBJECT.FREEZE()
para prevenir cambios en un objeto se usa "Object.freeze() y lo que quieres 
que se bloque dentro del parentesis"*/

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  //aqui se bloque
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/*OBJECT.VALUE(), OBJECT.KEYS(), OBJECT.ENTRIES()
el "object.value()" nos devuelve un array con todos los "values" del objeto que le demos a usar como parametro.
el "objeto.keys()" nos devuelve un array con todos los "keys" del objeto que le demos a usar como parametro.
el "objeto.entries()" nos devuelve un array compuesto por arrays de los pares de [key, value] del objeto que
le demos como parametro. 

Crea un objeto con 10 propiedades diferentes y en un array que se llame
keys guarda todas sus keys y en otro que se llame values guarda todos sus values
Ejemplo :
{
Saludo:"hola",
Despedida:'adios'
}

Keys = ['saludo', 'despedida']
Values = ['hola', 'adios']

Y ultimo un arrray de arrays que tenga el key y el value
ObjetoArray = [['saludo', 'hola'],['despedida', 'adios']]*/

let japon = true;
const anime = {
  serie: "dBZ",
  nombre: "vegeta",
  status: "vivo",
  specie: "sayajin",
  genero: "masculino",
  planetaOrigen: "sadala",
  hijo: "truncks",
  transformacion: "ultra ego",
  ataque: "resplandor final",
  frase: "eres un insecto",
};
let values = [];
let keys = [];
let arrayConArrays = [];
if (japon) {
  values = Object.values(anime);
  keys = Object.keys(anime);
  arrayConArrays = Object.entries(anime);
}
console.log(values);
console.log(keys);
console.log(arrayConArrays);

//ARROW FUNCTIONS con parametros
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

/* PARAMETROS POR DEFAULT
declarar parametros por default para tus funciones, estas entran cuando 
el argumento no fue declarado*/
// el value es el parametro y el 1 es el valor por default de value
const presentarme = function (
  nombre = "Omar",
  apellido = "Chavez",
  trabajo = "Programador"
) {
  console.log(
    `Hola mi nombre es ${nombre} ${apellido} y trabajo como ${trabajo}`
  );
};
// el "undefined" hace que tome el valor por default y permite escribir los demas argumentos.
presentarme("Eduardo", undefined, "Curtidor");

//REST PARAMETER, FALTA ENTENDER MAS
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3));

// SPREAD OPERATOR
// usando "..." seguido del nombre del array se puede llamar los datos del mismo.
//accede a todos los elementos del array.

const meses = ["enero", "febrero", "marzo", "abril", " mayo"];
let numbers = [-12, 160, 0, -3, 51];
months = [...meses];
console.log(months.concat("junio"));

/*aqui se creo un array con un objeto adentro llamando con el spread operator y al
estar dentro de un objeto le asigna un valor*/
let objetoMeses = [{ ...months }];
console.log(objetoMeses);

let numeroMin = Math.min(...numbers);
let numeroMax = [Math.max(...numbers)];
console.log(numeroMin);
console.log(numeroMax);

//DESTRUCTURING DE OBJETOS, para extraer values de objetos.
/*Aquí el "name" y "age" se crearán variables y se les asignarán los valores 
de sus respectivos valores desde el user objeto, en este caso "pokemones" */

const pokemones = {
  name: "charmander",
  type: "fire",
  age: 8,
};
//forma antigua
const pokemonName = pokemones.name;
console.log(pokemonName);

// una mejor sintaxis para usar destructuring, se asignan a variables con el mismo nombre
//forma nueva
const { type, age } = pokemones;
console.log(type);
console.log(age);

/*La desestructuración le permite asignar un nuevo nombre de variable al extraer valores.
 Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor. */
const { name: kantosPokemonName, type: kantosPokemonType } = pokemones;
console.log(kantosPokemonName);
console.log(kantosPokemonType);

// un objeto con anidacion
const dBZ = {
  goku: { age: 40, specie: "sayajin", power: "kamehameha" },
  vegeta: { age: 45, specie: "sayajin", power: "big bang attack" },
};

//Utilice la asignación de desestructuración para asignar variables de objetos anidados.

const {
  vegeta: { power: vegetaPower },
  goku: { power: gokuPower },
} = dBZ;
console.log(vegetaPower);
console.log(gokuPower);

//
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
console.log(lowToday);
console.log(highToday);

/* DESTRUCTURING DE ARRAYS
funciona muy similar a destructurar objetos*/
const numeros = [5, 4, 9, 1, 78, 45, 2];
/* el a, b, hacen referencia a los primeros 2 numeros del array, mientras que "...arr"
 hace referencia a los demas numeros del array y lo devuelve como otro array*/
const [a, b, ...arr] = numeros;
console.log(arr);

// FUNCIONES DECLARATIVAS CONCISAS CON ES6.
/*Al definir funciones dentro de objetos en ES5, tenemos que usar la palabra 
clave functioncomo sigue:*/
const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
/*Con ES6, puede eliminar el function palabra clave y dos puntos juntos al
 definir funciones en objetos. He aquí un ejemplo de esta sintaxis: */
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};
console.log(person.sayHello());
