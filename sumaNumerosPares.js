//Definimos la función 'sumaNumerosPares'
//Toma un parámetro 'arreglo', que debe ser un arreglo numérico
//Devuelve la suma de todos los números pares en el arreglo
//Si el arreglo está vacio o no contiene números pares, devuelve 0

function sumaNumerosPares(arreglo) {
  let suma = 0; //Inicializamos la variable que contendrá la suma de los números pares

  //Recorremos el arreglo con un ciclo 'for'
  for (let i = 0; i < arreglo.length; i++) {
    //Verificamos si el número en la posición actual es par
    if (arreglo[i] % 2 === 0) {
      suma += arreglo[i]; //Si es par, lo sumamos a la variable 'suma'
    }
  }

  return suma; //Devolvemos la suma de los números pares
}

//Ejemplos de uso de la función
//Llamamos a la función con distintos arreglos para obtener la suma de los números pares

console.log(sumaNumerosPares([1,2,3,4])); //devuelve 6 (2+4=6)
console.log(sumaNumerosPares([1,3,5])); //devuelve 0 (no hay números pares)
console.log(sumaNumerosPares([])); // devuelve 0 (el arreglo está vacío)