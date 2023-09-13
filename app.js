
import express  from 'express';
import usersRoutes from './route/usersRoute.js';
import db from './config/db.js'

//! crear app
const app = express()


// connection a la base de datos
try {
    await db.authenticate();
    console.log('la coneccion a la base de datos esta lista')
} catch (error) {
    console.log(error)
}

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

