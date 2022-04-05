'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr=[1];
  var factor=2;
  while(num>1){
    if(num%factor===0){
      num=num/factor;
      arr.push(factor);
    }else{
      factor=factor+1;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux;
  var swap=1;
  while(swap===1){
    swap=0;
    for(var x=0;x<array.length;x++){
      if(array[x]>array[x + 1]){
          aux=array[x];
          array[x]=array[x + 1]
          array[x + 1]=aux;
          swap=1;
        }
      }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  var aux;
  var j;
  for(var i=0;i<array.length;i++){
    j=i;
    while(j>0 && array[j]<array[j-1]){
      aux=array[j];
      array[j]=array[j - 1]
      array[j - 1]=aux;
      j=j-1;
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var arraux=[]
  var aux;
  var aux2=0;
  var ind;
  for(var i=0;i<array.length;i++){
    aux=array[i];
    ind=i;
    for(var y=0;y<array.length;y++){
      if(array[y]>aux2) 
        aux2=array[y];
      if(array[y]<aux){
        aux=array[y];
        ind=y;
      }
    }
    arraux.push(aux);
    array[ind]=aux2;
  }
  return arraux;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
