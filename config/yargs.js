const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente'
    }
}

const optsBorrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const argv = require('yargs')
                .command('crear', 'Crear una tarea por hacer', optsCrear)
                .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
                .command('borrar', 'Borra una tarea', optsBorrar)
                .help()
                .argv;
module.exports={
    argv
}