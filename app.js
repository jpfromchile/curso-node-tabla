require('colors');

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// option('')l
// listar
// boolean (opcional)
// default: false


console.clear();
console.log( argv );

console.log('base: yargs', argv.base );


// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

//const base = 5;

crearArchivo( argv )
  .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch( err => console.log(err));