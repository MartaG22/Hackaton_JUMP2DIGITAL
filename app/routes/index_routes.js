// Crear un base de datos (PostgreSQL, MySQL, Mongo, Firebase,etc) y guardar toda la lista de compañías utilizado siguiendo el esquema del JSON
// Crear un endpoint que devuelva las compañías ordenadas por tamaño 
// Crear un endpoint que devuelva las compañías ordenadas por fecha de creación 
// Crear un endpoint que devuelva los siguientes datos: Número de empresas que hay en cada industria, Número de empresas que hay por cada rango de tamaños, Número de empresas que hay en cada año de creación



const express = require('express');
const app = express();
const routes = express.Router();
const afegirCompanyies = require('../models/connectionDB.js')


const {companyiesOrdenadesPerTamany, companyiesOrdenadesPerData, quantitatEmpreses} = require('../controllers/companiesController.js');
// const {companyiesOrdenadesPerTamany, companyiesOrdenadesPerData, quantitatEmpreses} = require('../controllers/companiesController.js');
// const companyiesOrdenadesPerData = require('../controllers/companiesController.js');
// const nombresEmpreses = require('../controllers/companiesController.js');


routes.get('/tamany', companyiesOrdenadesPerTamany);
routes.get('/data', companyiesOrdenadesPerData);
routes.get('/quantitat', quantitatEmpreses);

module.exports = routes;