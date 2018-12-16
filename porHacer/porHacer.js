const fs = require('fs');
const fileName = `./db/data.json`;
let listadoPorHacer = [];

const guardarDB= () => {
   
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(fileName, data, (err) => {
        if (err) throw new Error('No se pudo guardar',err);
          })
    
}

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
        
    } catch (error) {
       listadoPorHacer =  [];
    }
   

}

const getListado = () =>{
   cargarDB();
    return listadoPorHacer;
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    
    let index = listadoPorHacer.findIndex(tarea =>{ 
        return tarea.descripcion === descripcion
    } )

    if(index < 0){ 
        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    }else{
        console.log("El elemento existe...");
        return porHacer;
    }
}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();
   let index = listadoPorHacer.findIndex(tarea =>{ 
       return tarea.descripcion === descripcion
   } )

    if(index >= 0){ 
        listadoPorHacer[index].completado= completado;
        guardarDB();
        return true;
    }else {
            return false;
    }

}

const borrar = (descripcion) =>{
    cargarDB();
   let index = listadoPorHacer.findIndex(tarea =>{ 
       return tarea.descripcion === descripcion
   } )

    if(index >= 0){ 
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    }else {
            return false;
    }

}

module.exports = {
    crear, getListado, actualizar, borrar
}
