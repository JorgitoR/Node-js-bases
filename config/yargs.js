
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Base de la multiplicacion'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default:10,
                    describe:'Este es el numero hasta donde quieres la tabla'
                })
                .option('l', {
                    alias: 'limit',
                    type: 'boolean',
                    default:false,
                    describe:'muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base debe ser un numero'
                    }
                    //si no hay error
                    return true;
                })
                .argv;


module.exports = argv;