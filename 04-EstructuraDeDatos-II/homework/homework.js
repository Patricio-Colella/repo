'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head=null;
}

function Node(value){
  this.value=value
  this.next=null
}

LinkedList.prototype.add=function(value){
                          var nodo=new Node(value);
                          var current=this.head;
                          if(!current){
                            this.head=nodo;
                            return nodo;
                          }
                          while(current.next){
                            current=current.next;
                          }
                          current.next=nodo;
                          return nodo;
 }

 LinkedList.prototype.remove=function(){
                              var current=this.head;
                              var valuelost;
                              var last;
                              if(!current){
                                return null;
                              }
                              if(!current.next){
                                valuelost=current.value;
                                this.head=null;
                                return valuelost;
                              }

                              while(current.next.next){
                                current=current.next;
                              }
                              valuelost=current.next.value;
                              current.next=null;
                              
                              return valuelost;
}

LinkedList.prototype.search=function(v){
                              var current=this.head;
                              while(current){
                                if(typeof(v)==="function"){
                                  if(v(current.value)){
                                    return current.value;
                                  }
                                }else{   
                                    if(typeof(v)==="object") {
                                      for (const key in v) {
                                        if (v[key]===current.value) {
                                          return v[key];
                                        }
                                      }
                                    }
                                  }
                                 if(current.value===v){
                                    return current.value;
                                 }
                                current=current.next;
                              }
                              return null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
    this.tabla=new Array(35);
    this.numBuckets=35;
  }
  

  
  HashTable.prototype.hash=function(clave){
                            var suma=0;
                            for(var i=0;i<clave.length;i++){
                              suma=suma+clave.charCodeAt(i);
                            }
                            return suma%35;
  }
  
  HashTable.prototype.set=function(clave,valor){
                            var indice=this.hash(clave);
                            var encontrado=false;
                            if(typeof(clave)!="string"){
                              throw TypeError("Keys must be strings");
                            }
                            if(this.tabla[indice]){
                              for(var i=0;i<this.tabla[indice].length;i++){
                                if(this.tabla[indice][i][0]===clave){
                                  this.tabla[indice][i][1]=valor;
                                  encontrado=true;
                                }
                                i=i+1;
                              }
                            }
                            if(this.tabla[indice]===undefined){
                              this.tabla[indice]=[];
                              this.tabla[indice].push([clave,valor]);
                            }else{
                              if(!encontrado){
                                this.tabla[indice].push([clave,valor]);
                              }
                            }
                            
  }
  
  HashTable.prototype.get=function(clave){
                            var indice=this.hash(clave);
                            var sum=0;
                            if(this.tabla[indice]){
                                for(var i=0;i<this.tabla[indice].length;i++){
                                    if(this.tabla[indice][i][0]===clave){
                                        return this.tabla[indice][i][1]
                                    }
                                }
                            }

                            return undefined;
  }
  
  HashTable.prototype.hasKey=function(clave){
                                var x=this.get(clave);
                                if(x===undefined){
                                  return false;
                                }
                                return true;
  }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};

