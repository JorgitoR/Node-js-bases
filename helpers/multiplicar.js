const fs = require("fs");
const colors = require('colors');


const crearArchivo = (base, limit, hasta=10) => {


    console.log('==========='.green);
    console.log('   Tabla del:', colors.blue(base));
    console.log('============'.green);

    let salida='';

    for(let i=1; i<=hasta; i++){

        salida += `${base} x ${i} = ${base*i}\n`;

    }

    if(limit){
        console.log(salida)
    }

    fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
    return `tabla-${ base }.txt`;

}


const getInfoArchivo = async(base, limit) =>{

    try{
        const tabla = await crearArchivo(base, limit);

    }catch (error){
        throw error; 
    }

}



module.exports ={
    getInfoArchivo: getInfoArchivo
}