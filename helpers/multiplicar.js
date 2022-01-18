const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( { base = 1, list = false, hasta = 10 } ) => {// using async is the same as using promises

    try {

        let salida = '';       
        let consola = '';

        consola += '================\n'.green;
        consola += `  Tabla del: ${ colors.blue(base) }\n`.green;
        consola += '================\n'.green; 

        salida += '================\n';
        salida += `  Tabla del: ${ base }\n`;
        salida += '================\n'; 

        for (let i = 1; i <= hasta; i++) {    
            salida += `${ base } x ${ i } = ${ base * i}\n`; // \n = linebreak
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.yellow } ${ base * i}\n`;
        }

        if( list ){
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }

};

// const crearArchivo = ( base = 1 ) => {    

//     return new Promise( ( resolve, reject ) => {

//         try{
//             console.log('================');
//             console.log(`  Tabla del: ${ base }`);
//             console.log('================');

//             let salida = '';

//             for (let i = 1; i <= 10; i++) {    
//                 salida += `${ base } x ${ i } = ${ base * i}\n`;
//             }

//             console.log(salida);

//             fs.writeFileSync(`tabla-${ base }.txt`, salida);

//             resolve( `tabla-${ base }.txt` );

//         } catch (err) {
//             reject(`Ocurrió un error al crear la tabla del ${ base }`);
//         }
        
//     });

// };

module.exports = {
    crearArchivo
};