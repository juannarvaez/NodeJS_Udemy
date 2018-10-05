require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

//Para leer data que vienen del cliente en archivos tipo json
app.use(bodyParser.urlencoded({ extended: false })) // "use" son middlewares 
app.use(bodyParser.json())

app.use(require('./routes/usuario').app) //Esto para importar y usar dentro de el objeto app la logica que vienen en el require, aqui se encuentra la API REST del usuario

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Base de datos: Online')
    }
}); //to conect with the cafe mongoDB

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto:", process.env.PORT)
})