
const descripcion ={
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea que voy hacer'
  } 

const completado= {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'

}

const opcionesCrear = {
    descripcion
}

const opcionesActualizar = {
    descripcion, 
    completado
}

const opcionesBorrar = {
    descripcion
}

const argv = require('yargs')
            .command('crear', 'Crear una nueva tarea',opcionesCrear)
            .command('actualizar', 'Actualiza una tarea',opcionesActualizar)
            .command('borrar', 'Borra una tarea',opcionesBorrar)
            .help()
            .argv;


module.exports= {
    argv
}