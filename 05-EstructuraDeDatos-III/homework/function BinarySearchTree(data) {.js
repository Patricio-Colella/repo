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
                                        console.log(this.value)
                                        if(this.value==data){
                                            console.log(this.value,"--",data)
                                          return true;
                                        }else{
                                            
                                          if(this.value>data){
                                            console.log(this.value,"--",data)
                                            if(this.left) {
                                              return this.left.contains(data);
                                            }else{
                                                return false;
                                            }
                                          }
                                          if(this.value<data){
                                            console.log(this.value,"--",data)
                                            if(this.right) {
                                              return this.right.contains(data);
                                            }else{
                                                return false;
                                            }
                                          }
                                        }
  }
  
  BinarySearchTree.prototype.depthFirstForEach=function(){

  }

  BinarySearchTree.prototype.breadthFirstForEach=function(arr,tam,i){
                                                    if(typeof(arr)!=="object"){
                                                        arr=new Array();
                                                        arr.push(this.value);
                                                        tam=this.size()
                                                        i=0;
                                                    }
                                                    if(this.left){
                                                        arr.push(this.left.value);
                                                        arr.push(i)
                                                    }
                                                    if(this.right){
                                                        arr.push(this.right.value);
                                                        arr.push(i)
                                                    }
                                                    if(this.left){
                                                        arr=this.left.breadthFirstForEach(arr,tam,i+1);
                                                    }
                                                    if(this.right){
                                                         arr=this.right.breadthFirstForEach(arr,tam,i+1);
                                                    }
                                                    if(i===0){
                                                        var x=[];
                                                        for(var y=0;y<arr.length;y++){
                                                            for(var z=1;z<arr.length;z++){
                                                                if(arr[z+1]===y){
                                                                    x.push(arr[z]);
                                                                }
                                                                z=z+1;
                                                            }
                                                        }
                                                        x.unshift(arr[0])
                                                        return x;    
                                                    }
                                                    
                                                    return arr;
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

var tree=new BinarySearchTree(20);
tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.insert(17);
tree.insert(21);
tree.insert(28);
tree.insert(0);
tree.insert(14);
tree.insert(50);
tree.insert(1);
tree.insert(45);
tree.insert(13);
tree.insert(12);
tree.insert(11);
tree.insert(30);
tree.insert(35);
tree.insert(33);
tree.insert(31);
tree.insert(34);


console.log(tree.breadthFirstForEach())
