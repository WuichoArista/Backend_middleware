 //midelware antes de rutas


 const logger = ( req , res , next) => {
    
    const {flag} = req.body

    if( flag === true){
        console.log('peticion recivida');
        console.log(` RUTA RECIVIDA ${req.protocol}://${req.get('host')} ${req.originalUrl}`);
        next()
    }else{
        console.log('falta logear');
        res.send('falta logearse')
    }
}

module.exports = { logger }