/* SCOPE
 aqui se ve tema de scope ya que los let i declarados en diferentes funciones 
no se afectan entre si ya que trabajan en su propia funcion */

// se les reasigno valores a cada elemento del array "s"

/*OBJECT.FREEZE()
para prevenir cambios en un objeto se usa "Object.freeze() y lo que quieres 
que se bloque dentro del parentesis"*/

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

//ARROW FUNCTIONS con parametros

/* PARAMETROS POR DEFAULT
declarar parametros por default para tus funciones, estas entran cuando 
el argumento no fue declarado*/
// el value es el parametro y el 1 es el valor por default de value

// el "undefined" hace que tome el valor por default y permite escribir los demas argumentos.

//REST PARAMETER, FALTA ENTENDER MAS

// SPREAD OPERATOR
// usando "..." seguido del nombre del array se puede llamar los datos del mismo.
//accede a todos los elementos del array.

/*aqui se creo un array con un objeto adentro llamando con el spread operator y al
estar dentro de un objeto le asigna un valor*/

//DESTRUCTURING DE OBJETOS, para extraer values de objetos.
/*Aquí el "name" y "age" se crearán variables y se les asignarán los valores 
de sus respectivos valores desde el user objeto, en este caso "pokemones" */

//forma antigua

// una mejor sintaxis para usar destructuring, se asignan a variables con el mismo nombre
//forma nueva

/*La desestructuración le permite asignar un nuevo nombre de variable al extraer valores.
 Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor. */

// un objeto con anidacion

//Utilice la asignación de desestructuración para asignar variables de objetos anidados.

//

/* DESTRUCTURING DE ARRAYS
funciona muy similar a destructurar objetos*/

// FUNCIONES DECLARATIVAS CONCISAS CON ES6.
/*Al definir funciones dentro de objetos en ES5, tenemos que usar la palabra 
clave function como sigue:*/

/*Con ES6, puede eliminar el function palabra clave y dos puntos juntos al
 definir funciones en objetos. He aquí un ejemplo de esta sintaxis: */
