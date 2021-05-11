const fs= require('fs');

const tareasJSON = JSON.parse(fs.readFileSync('./tareasJSON/tareas.json', 'utf-8')); //bueno a tener en cuenta los parentesis

const tareas={
        listar: function(){
            tareasJSON.forEach(elemento =>
                console.log(`Tarea: ${elemento.título}, estado: ${elemento.estado}`)
                
            )
        }
};

module.exports = tareas;

