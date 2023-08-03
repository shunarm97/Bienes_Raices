
import express  from 'express';
import usersRoutes from './route/usersRoute.js';
//! crear app

const app = express()

// habilitar PUG
app.set('view engine', 'pug')
app.set('views', './views')



// Carpeta publica

app.use(express.static('public'))

//Routing

app.use('/auth', usersRoutes)



// definir el puerto y arancar el proyecto

const port = 3000

app.listen(port, () => {
    console.log(`El servidor esta arrancando en el puerto ${port}`)
});

