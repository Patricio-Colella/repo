#### Avanzado II

## Closures

Otro tema importante en JavaScript es `closures`. Veamos a que se refieren con un ejemplo:

```javascript
function saludar( saludo ){
  return function( nombre ){
    console.log(saludo + ' ' + nombre);
  }
}

var saludarHola = saludar('Hola'); // Esto devuelve una función

saludarHola('Toni'); // 'Hola Toni'

cousure:retornar una funcion con otra, esta segunda pudiendo aceder al entorno creado por la primera(hay un  proceso dentro de JavaScript que se llama `garbage collection` que eventualmente lo va limpiando si no lo usamos. )


### Ejemplo Closures

```javascript
var creaFuncion = function(){
  var arreglo = [];

  for ( var i=0; i < 3; i++){
    arreglo.push(
      function(){
        console.log(i);
      }
    )
  }
  return arreglo;
}

var arr = creaFuncion();

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3
```
```javascript
var creaFuncion = function(){
  var arreglo = [];
  for ( var i=0; i < 3; i++){
    arreglo.push(
      (function(j){
        return function() {console.log(j);}
      }(i))
    )
  }
  return arreglo;
}

var arr = creaFuncion();

arr[0]() // 1
arr[1]() // 2
arr[2]() // 3
```



### Function Factory

```javascript
function hacerSaludo( lenguaje ){
  return function(){
    if ( lenguaje === 'en'){
      console.log('Hi!');
    }

    if ( lenguaje === 'es'){
      console.log('Hola!');
    }
  }
}

var saludoIngles = hacerSaludo('en');
var saludoEspaniol = hacerSaludo('es');
```

### Closures and Callbacks

Ahora que sabemos lo que son los _closures_, si pensamos en todo lo que hicimos algunas vez con JavaScript, es muy probable que nos demos cuenta que ya lo veniamos usando (tal vez sin saberlo).

Por ejemplo:

```javascript
function saludarMasTarde(){
  var saludo = 'Hola';

  setTimeout( function(){
    console.log(saludo);
  },3000)
};

saludarMasTarde();
```

inocamos a `saludarMasTarde`, creando un execution context en el que invocamos a la función `setTimeout` y definimos la variable `saludo`. 
settimeout busca saludo pero no lo encuentra en su ejecution context, y sale afuera encontrando la variable perdida "saludo"

## Call, Apply and Bind

la funcion "bind" une (bindea) una funcion (lognombre) a un objeto (this) 

var lognombre= (funcion que hace algo y recibe dos argumentos)
lognombre.call(persona)

la funcion "call" llama a una funcion (lognombre) con el this(persona), puede recivir argumentos (x,y) si los requiere la funcion (z,k)

var lognombre= (funcion que hace algo y recibe dos argumentos z,k)
logNombre.call(persona,x,y);

la funcion "apply" es iguala "call", pero en vez de recibir argumentos, recibe solo un arreglo del cual los extrae de ser necesario

