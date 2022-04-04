# Estructuras de Datos I

## Recursividad
  
recursividad o recurrencia, plantea la solución de un problema como la solución de pequeñas instancias del mismo problema por _repetición_.


### Suma recursiva

Queremos sumar todos los números hasta un corte, entonces el caso base seria  cuando llegamos a 0 si sumamos desde el número y disminuyendo (porque así se me ocurrió en esta oportunidad), y nuestra llamada recursiva debería aparecer cuando ya sumamos y queremos que pase de número.


## Estructuras de Datos

formas particulares de  organizar datos de tal manera que puedan ser utilizados de manera eficiente.

## Arreglos

El arreglo  es una colección finita de elementos que ocupan espacios contiguos de memoria, y se pueden acceder a cada uno de ellos a través de un índice.

Los arreglos nos sirven para guardar una colección de cosas con una inserción muy rápida, y es fácil acceder a un objeto si conocemos su índice. pero es poco eficiente encontrar un elemento(o borrarlo) ya que hay que buscar en todo el arreglo

## Sets

Un Set es una colección de elementos ,como un arreglo, sin un orden en particular, pero en donde _cada elemento puede aparecer una sola vez_.

var set1    = new Set()
set=[1,2,3,3,3,4,1,5,2]
set1= {1,2,3,4,5}
```

## Pilas (Stack)

estructura de datos basada en una estructura llamada lifo( last in first of) 

solo dos funciones son necesarias: push(), para agregar elementos al final, y pop, para devolvernos el ultimo elemento agregado

se puede crear una pila mediante el uso de,por ejemplo, un arreglo por su parecido comportamiento
```

## Cola (Queue)

estructura de datos basada en una estructura llamada fifo( first in first of) 

solo dos funciones son necesarias: enqueue(), para agregar elementos al final, y dequeue(), para devolvernos el primer elemento agregado

se puede crear una cola mediante el uso de,por ejemplo, un arreglo por su parecido comportamiento


