// Destructuring Objects // ES6
const { sumar, restar } = require('./math');
const Persona = require('./humano');

// console.log(math);
console.log(sumar(2, 3));
console.log(restar(2, 3));
// console.log(math.multiplicar(2, 3));
// console.log(math.dividir(2, 3));

// Persona
const Pepe = new Persona('Pepe', 24);
console.log(Pepe.sayHi());

const Pancho = new Persona('Pancho', 56);

// Express
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   return res.json({ message: Pancho.sayHi() })
// });

// app.listen(3000);

const escribirArchivo = require('./escribirArchivo');

escribirArchivo('pepe', 'Hola yo soy Pepe');
escribirArchivo('pancho', Pancho.sayHi());
escribirArchivo('paola', 'Hola yo soy Paola');