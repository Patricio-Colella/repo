
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a=8, b=9, c=10) {
  var x = 10;
  console.log(x); 
  console.log(a); 
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);           
console.log(b);
console.log(x);
```
LISTO: //x=10  //a=8 //b=a=8 //b=9 //b=10 //x=1

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```
LISTO: // bar= registra que esta creada, pero no llega a su definicion-> undefined  //baz=no esta creada->error // hola!

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```
LISTO: //Franco

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
LISTO: //tony //franco //tony

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
LISTO: //the flash // reverse flash // the flash //franco

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"----------2
"2" * "3"--------6
4 + 5 + "px"-----"9px"
"$" + 4 + 5------"$45"
"4" - 2----------2
"4px" - 2--------NaN
7 / 0------------infinity


{}[0]------------undefined


parseInt("09")---9
5 && 3 &&2-------2 && si  encuentra un false (0 ) se detiene y o muestra
5 && 0 &&2-------0
2 && 5-----------5
0||0||25||5------25 ||muestra el primero tru (mayor a 0)
25 || 5----------25
[3]+[3]-[10]-----concatena los dos primeros como caracteres, despues al encontraruna resa los usa como numeros y resta 10, devolviendo 23
3>2>1------------3>2=true, true>1=false
[] == []!--------false==false = true


```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
LISTO://undefined debido a que esta creada, pero todavia no definida //2 debido a que registra la creacion de la funcion antes de registar si la usa o no


Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```
LISTO: //undefined


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

 LISTO: //aurelio de rosa  // juan perez


### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```

1//4//3//2