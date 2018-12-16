const argv = require('./config/yargs').argv
const color = require('colors');
const porHacer = require ("./porHacer/porHacer");
console.log(argv)

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for( let tarea of listado){
            console.log("===============".green);
            console.log(`Descripcion: ${tarea.descripcion},  Estado: ${tarea.completado} `);
            console.log("===============".green);
        }
        break;

        
    case 'actualizar':
    
        let actualizar = porHacer.actualizar(argv.descripcion,argv.completado);
        break;

    case 'borrar':
    
        let borrar = porHacer.borrar(argv.descripcion,argv.completado);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido'.red);
        break;
}