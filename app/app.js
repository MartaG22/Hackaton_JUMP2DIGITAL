// Crear un base de datos (PostgreSQL, MySQL, Mongo, Firebase,etc) y guardar toda la lista de compañías utilizado siguiendo el esquema del JSON
// Crear un endpoint que devuelva las compañías ordenadas por tamaño 
// Crear un endpoint que devuelva las compañías ordenadas por fecha de creación 
// Crear un endpoint que devuelva los siguientes datos: Número de empresas que hay en cada industria, Número de empresas que hay por cada rango de tamaños, Número de empresas que hay en cada año de creación

"use strict";

const mongoose = require('mongoose');
const db = require('./models/modelCompanies.js');  //Ruta creación de modelos
const {afegirCompanyies, conncectDB} = require('./models/connectionDB.js')
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const routes
const routes = require('./routes/index_routes.js');
const port = process.env.PORT || 3000;

app.use('/', routes);
// app.get ('/yo', (req, res)=> {

// });



app. listen(port, () => {
    console.log(`API REST inicialitzant en http://localhost: ${port}`)
})

