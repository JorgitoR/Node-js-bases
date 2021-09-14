const fs = require('fs');

console.clear();
console.log('=========');
console.log('Tabla del 5');
console.log('=========');

let salida;

for (let i=1; i<=10; i++){

    salida += `${ 5 } x ${ i } = ${i*5}\n`
}

fs.writeFile('tabla-5.txt', salida, (err) =>{

    if(err) throw err; //si sale un error si no llamamos
 
    console.log('able-5.txt creado')

})