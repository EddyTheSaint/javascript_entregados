const suma = (a,b) =>{
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código
    let x= 10;
    let y= 5;
  
   return x+y;
   console.log(suma())
   
}

const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    let x =2;
    let y=3;
    if(x===y){
      return true;
    }
    else {
      return false;
    }
    console.log(sonIguales())
    
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    str1 ="hola"
    str2="ola"
    if(str1==str2){
      return true
    }else{
      return false
    }
  }

  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    numero =a;
    a=7;
    if(a>0){
      return "Es positivo"
    }else if (a<0){
      return "es negativo"
    }else{
      return "es cero"
    }

    
  }

  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color){
      case 1: "blue"
      console.log("this is blue");
      
      case 2: "Red"
      console.log("this is red");
      default:  console.log("color not found")
    }
    color =green;
    
    
  }

  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    numero=8;
    if(numero%3){
      return "fizz"
      console.log("fizz")
    }
    if else (numero %5){
      return "buzz"
    }
    if else(numero %3 && numero %5){
      return "fizz buzz"

    }else return numero;
    
  }

  const devolverPrimerElemento = (array) => {
    // Devuelve el primer elemento de un array
    // Tu código:
    let frutas=["manzana","pera","banano"]
    return frutas [0];

   
  }

  const agregarItemAlFinalDelArray = (array, elemento) =>{
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    let equipos=["real madrid","psg","villa real"]
    let nuevoEquipo=equipos.push("liverpool")
    return equipos.forEach(function(elemento))
    console.log(elemento);
  }

  const nuevoUsuario = (nombre, email, password) => {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    const ejemplo01={

      nombre:nombre,
      email: email,
      password: password
    };
    return ejemplo01;
  }

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    usuario:{
      password:"abc123"
    }
    if (usuario.password=="abc123"){
      return true;
    }else{
      return false;
    }
  }

  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario:{
      nuevaPassword:"123abc"
    }
    usuario.password=usuario.nuevaPassword;
  }

  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    // var user = {
    //   amigos: ['Pedro', 'Sebastian']
    // }
   var usuario={
     amigos:["Pedro","Sebastian"]
   }
   usuario.amigos.unshift("Patricio")
   return usuario;
  }

  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    const usuarios={
      usuarioUno= true
      }
      usuarioDos= true
    }
    usuarioTres =true
    }
    const usuarios =[usuarios.usuario.Uno,Usuarios.usuarioDos,usuarios.usuarioTres];
  }


  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    // let usuario = {
    //   posts: [{
    //     likes: 4
    //   }]
    // };
let usuario={
  posts:[{
    let likes: 4;
  }]
  
}
let usuarioDos{
  post: 4;
  }
  const liesUsuarios=[usuario.post.likes+usuario.Dos.post.likes];
}
console.log("la suma de likes es: "+sumarLikesDeUsuario)
  }

  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:
const personaUno=(detalle)=>{
  personaUno.detalle={
    Nombre:"Juan"
  
  }
  
}
    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada

    
}

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    
    
    for(let j = 0; j < numeros.length; j++)
    {
      if(Number.isInteger(numeros[j]))
      {
        cb += numeros[j];
      }
    }

    console.log("la suma: "+ (cb));
}

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
     n1= 3
     n2= 4
     
     cb = n1+n2;
     return cb
  }

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    let palabrasconA = []
    palabrasconA= array.filter(word => word.charAt(0) == 'a');

    return alert(palabrasconA);
  } 


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

