//PROMISE

/*una promesa es un objeto que podria producir un valor a futuro.
para crear una funcion se necesita usar la palabra clave "new", toma una funcion como
argumento con 2 parametros "resolve" y "reject" estos son metodos utilizados para
determinar el resultado de la promise */

// estructura basica para la creacion de un "promise"

const time = new Promise((resolve, reject) => {
  let tiempo = true;
  if (tiempo) {
    resolve(` el tiempo es real`);
  } else {
    reject(` el tiempo no existe`);
  }
});

/*.then se utiliza cuando el resultado de la "promise" se cumplio con "resolve" y a ese
resultado lo llamaremos "result" */
time.then((result) => {
  console.log(result);
});

/* "catch" es el opuesto de "then" se utiliza cuando el "promise" a sido rechazado con "reject" y a este
resultado lo llamaremos "error" */

time.catch((error) => {
  console.log(error);
});
