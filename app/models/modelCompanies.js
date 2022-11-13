const mongoose = require('mongoose');
const assert = require('assert');
const Schema = mongoose.Schema;
const companyiesJSON = require('../utils/companies.json');
const { fileURLToPath } = require('url');
// console.log(companyiesJSON)

mongoose.connect('mongodb://localhost:27017/companyia');
const db = mongoose.connection

db.on('error', (err) => {
    console.log('connection error', err);
});

db.once('open', () => {
    console.log('Connection to DB successful');
});

const companyia = new Schema(
    {
        "id": { type: String },
        "website": { type: String },
        "name": { type: String },
        "founded": { type: Number },
        "size": { type: String },
        "locality": { type: String },
        "region": { type: String },
        "country": { type: String },
        "industry": { type: String },
        "linkedin_url": { type: String }
    }
);

module.exports = mongoose.model('Companyia', companyia);