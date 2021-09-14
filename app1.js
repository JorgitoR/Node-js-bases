
const { getInfoArchivo } = require('./helpers/multiplicar') // las {} para la desestructuracion
//const argv = require('yargs').argv;
//console.log(process.argv)
//console.log(argv)

const argv = require('./config/yargs')

console.clear();
console.log(argv);
console.log('base: yargs', argv.b);

getInfoArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err))
