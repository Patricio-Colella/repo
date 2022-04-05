'use strict'

const { add } = require("@11ty/eleventy/src/TemplateCache")

// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(data) {
  this.value=data
  this.right=null
  this.left=null  
}

BinarySearchTree.prototype.insert=function(data){
                                    var aux=this;
                                    if(aux.value>data){
                                      if(!aux.left) {
                                          this.left=new BinarySearchTree(data);
                                          return aux;
                                      }else{
                                          this.left.insert(data);
                                      }   
                                    }
                                    if(aux.value<data){
                                       if(!aux.right) {
                                          this.right=new BinarySearchTree(data);
                                          return aux;
                                       }else{
                                          this.right.insert(data);
                                       }
                                    }
}

BinarySearchTree.prototype.contains=function(data){
                                        if(this.value==data){
                                          return true;
                                        }else{
                                            
                                          if(this.value>data){
                                            if(this.left) {
                                              return this.left.contains(data);
                                            }else{
                                                return false;
                                            }
                                          }
                                          if(this.value<data){
                                            if(this.right) {
                                              return this.right.contains(data);
                                            }else{
                                                return false;
                                            }
                                          }
                                        }
}

BinarySearchTree.prototype.depthFirstForEach=function(cb,tipo){

  if(tipo==="pre-order")cb(this.value)
  if(this.left)this.left.depthFirstForEach(cb,tipo)
  if(tipo==="in-order"||!tipo)cb(this.value)
  if(this.right)this.right.depthFirstForEach(cb,tipo)
  if(tipo==="post-order")cb(this.value)
}

  BinarySearchTree.prototype.breadthFirstForEach=function(cb,arr=[]){
    cb(this.value)
    if(this.left)arr.push(this.left)
    if(this.right)arr.push(this.right)
    if(arr.length) arr.shift().breadthFirstForEach(cb,arr)

  }

BinarySearchTree.prototype.size=function(s){
                                  if(!s){
                                    if(this.value)
                                        s=1;
                                  }
                                  if(!this){
                                      return 0;
                                  }
                                  if(this.right) {
                                      s=this.right.size(s+1);
                                  }
                                  if(this.left) {
                                      s=this.left.size(s+1);
                                  }
                                  return s;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
