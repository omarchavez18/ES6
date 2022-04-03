// 0) crea un array de numeros
let numerosNuevos = [5, 4, 7, 8, 9, 14, 21, 87];
// 1) crear un ciclo que imprima cada elemento del array + 32
numerosNuevos.forEach((albo) => {
  console.log(albo + 32);
});

// crea un ciclo que imprima cada elemento del array * 8
numerosNuevos.forEach((numbers) => {
  console.log(numbers * 8);
});
// 2) crear un ciclo que imprima numeros del 37 al 82
for (let i = 37; i < 83; i++) {
  console.log(i);
}

//3) crea un ciclo que imprima si los elementos son pares o impares
function pares(numerosNuevos) {
  for (let i = 0; i < numerosNuevos.length; i++) {
    if (numerosNuevos[i] % 2 === 0) {
      console.log(`el numero ${numerosNuevos[i]} es par`);
    } else {
      console.log(`el numero ${numerosNuevos[i]} es impar`);
    }
  }
}
pares(numerosNuevos);

// 4)  resuelve el ejercicio anterior con forEach
numerosNuevos.forEach((num) => {
  if (num % 2 === 0) {
    console.log(`el numero ${num} es par`);
  } else {
    console.log(`el numero ${num} es impar`);
  }
});
// 5) suma todos los elementos del array con for y con forEach
//forEach
let total = 0;
numerosNuevos.forEach((numbersos) => {
  total += numbersos;
});
console.log(total);

//for

// PROMISES

//6) crea una promise que me diga que las ballenas vuelan
const ballenas = new Promise((resolve, reject) => {
  let orcas = true;
  if (orcas) {
    resolve(`las ballenas pueden volar`);
  } else {
    reject(`las ballenas solo pueden nadar`);
  }
});
ballenas.then((result) => {
  console.log(result);
});

ballenas.catch((error) => {
  console.log(error);
});
// 6.1) crea una promise que me diga que goku se convirtio en super sayajin porque mataron a krilin
const kakarotto = new Promise((resolve, reject) => {
  let krilinEstaVivo = true;
  if (krilinEstaVivo) {
    resolve(`Goku murio porque no se convirtio en ssj y freezer lo mato`);
  } else {
    reject(
      `Goku se convirtio en ssj porque mataron a krilin y derroto a freezer`
    );
  }
});
kakarotto.then((result) => {
  console.log(result);
});
kakarotto.catch((error) => {
  console.log(error);
});

// ejercicios ES6.

//7) //CAMBIO DE VALORES DE UN ARRAY con const
const arrayNuevo = [5, 18, 21, 23, 25, 27];
function cambioDeValores() {
  arrayNuevo[0] = 10;
  arrayNuevo[2] = 40;
  arrayNuevo[5] = 7;
}
cambioDeValores(arrayNuevo);
console.log(arrayNuevo.concat(100));
console.log(arrayNuevo);

// 8) crea una promise que ejecute cambiar una variable declarada, e haz imposible el poder cambiarlo
const moto = new Promise((resolve, reject) => {
  let motoGP = true;
  //aqui abajo indica que no le permite cambiar nada del array
  Object.freeze(arrayNuevo);
  if (motoGP) {
    resolve(arrayNuevo.push(1518));
  } else {
    reject(arrayNuevo.shift());
  }
});
moto.then((result) => {
  console.log(result);
});
moto.catch((error) => {
  console.log(error);
});
console.log(arrayNuevo);

// 9) crea un array nuevo con los datos del array existente usando spread operator dentro de un objeto
// el spread operator se utiliza con los "..." antes del array
let arreglo2 = [{ ...arrayNuevo }];
console.log(arreglo2);

// 10) extrae el numero mas grande y el mas chico  del array usando spread operator
let numeroGrande = Math.max(...arrayNuevo);
let numeroChico = Math.min(...arrayNuevo);
console.log(numeroGrande);
console.log(numeroChico);

// 11) crea un objeto con 4 elementos y crea 2 variables con elementos del objeto con un destructuring
let personajeAnime = {
  dragonBall: "Goku",
  onePunchMan: "Saitama",
  narutoShippuden: "Naruto",
  attackOnTitan: "Eren",
};
let personajePrincipal = personajeAnime.dragonBall;
console.log(personajePrincipal);

const { attackOnTitan, onePunchMan } = personajeAnime;
console.log(attackOnTitan);
console.log(onePunchMan);

/* 12) crea un objeto con anidacion y usa destructuring para crear dos variables
y dos del mismo objeto*/
let f1 = {
  redBull: { piloto1: "Max Verstappen", piloto2: "Checo Perez" },
  mercedes: "Lewis Hamilton",
  ferrari: { piloto1: "Charles Leclerc", piloto2: "Carlos Sainz" },
  mcClaren: "Lando Norris",
};

const {
  redBull: { piloto1: campeon2021 },
  ferrari: { piloto2: pilotoEspañol },
} = f1;

console.log(campeon2021);
console.log(pilotoEspañol);

/* 13) Crea un objeto con 10 propiedades diferentes y en un array que se llame
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
let anime = true;
const dragonBallZ = {
  personaje: "vegeta",
  planeta: "sadala",
  padre: "rey vegeta",
  raza: "sajayín",
  transformacion: "ultra ego",
  ataque: "resplandor final",
  hijo: "trunks",
  edad: 45,
  rival: "goku",
  esposa: "bulma",
};
let keys = [];
let values = [];
let arrayDeArrays = [];
if (anime) {
  keys = Object.keys(dragonBallZ);
  values = Object.values(dragonBallZ);
  arrayDeArrays = Object.entries(dragonBallZ);
}
console.log(keys);
console.log(values);
console.log(arrayDeArrays);

/* 14) crea una funcion que reciba 3 parametros: nombre, apellido y trabajo, que imprima en consola,
hola mi nombre es "nombre" "apellido" y trabajo de "trabajo",y dejar por default en cada parametro anterior
en nombre "omar" en apellido "chavez" y en trabajo "software developer"  */

const presentarme = (
  nombre = "Omar",
  apellido = "Chávez",
  trabajo = "Software Developer"
) => {
  console.log(
    `hola mi nombre es ${nombre} ${apellido} y trabajo como ${trabajo}.`
  );
};
presentarme("Diego", "Hernandez", undefined);

/* 15) crea un array con 10 datos, y crea otro array omitiendo los primeros 4 elementos
con un destructuring */

let animes = [
  "dbz",
  "aot",
  "naruto",
  "death note",
  "caballeros del zodiaco",
  "parasite",
  "7 pecados capitales",
  "super campeones",
  "one peace",
  "ranma 1/2",
];
const [c, d, e, f, ...mangas] = animes;
console.log(mangas);
