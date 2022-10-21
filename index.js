const express = require('express');
const morgan = require('morgan')
const app = express();
const { logger } = require('./src/middleware/logger')

const PORT = 3000;



app.use(express.json())
app.use(logger)



app.all('/user' ,( req , res , next) => {
    
    console.log('hola desde usuario')
    next()
})

 
const arr = [
    {
        nombre: 'cukis',
        raza: 'perro'
    },
    {
        nombre: 'niky',
        raza: 'gato'
    },
    {
        nombre: 'tete',
        raza: 'raton'
    },
];

 
 
 
app.get('/user' , ( req , res ) => {
    res.json( arr )
})//revisar

app.post( '/user/:id' , ( req , res ) => {
    console.log(req.body);
    console.log(req.params);
    res.send(`Peticion post recibida ${req.params.id}`)
})//agregar

app.put( '/user/:id' , ( req , res ) => {
    console.log('usuario actualizado');
    console.log(req.body);
    res.send( `Usuario de id: ${req.params.id} Actualizado`)
})//actualizar

app.delete( '/user/:id' , ( req , res ) => {
    console.log(`Usuario de id: ${req.params.id} eliminado`);
    res.send(`<h1>Usuario de id: ${req.params.id} eliminado</h1>`)
})//borrar


app.use( express.static('public') )

app.listen( PORT , () => {
    console.log(`El servidor con express esta en el puerto ${PORT}`);
});
