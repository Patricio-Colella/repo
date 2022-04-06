'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var menores=[];
  var mayores=[];
  if(array.length===1){
    return array;
  }
  if(array.length===0){
    return []
  }
  for(var i=1;i<array.length;i++){
    if(array[0]>array[i]){
      menores.push(array[i]);
    }else{
      mayores.push(array[i]);
    }
  }
  return quickSort(menores).concat([array[0]]).concat(quickSort(mayores)) 
}



function merge(arr1,arr2){
  var aux;
  var ind;
    for(var i=0;i<arr1.length;i++){
      aux=arr1[i];
      for(var j=0;j<arr1.length;j++){
        if(arr2[j]<aux){
          aux=arr2[j]
          ind=j;
        }
      }
      if(aux!==arr1[i]){
        arr2[ind]=arr1[i];
        arr1[i]=aux;
      }
    }
    arr2=mergeSort(arr2)
  return arr1.concat(arr2)    
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length===1) return array
  if(array.length===0) return []

  var arr1=array.slice(0,Math.floor(array.length/2))
  var arr2=array.slice(Math.floor(array.length/2),array.length)

  if(arr1.length<arr2.length)return merge(mergeSort(arr2),mergeSort(arr1))

  return merge(mergeSort(arr1),mergeSort(arr2))
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
