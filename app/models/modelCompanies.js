const mongoose = require('mongoose');
const assert = require('assert');
const Schema = mongoose.Schema;
const companyiesJSON = require('../utils/companies.json');
const { fileURLToPath } = require('url');
// console.log(companyiesJSON)
mongoose.connect('mongodb://localhost:27017/companies');


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
        "size": { type: Number },
        "locality": { type: String },
        "region": { type: String },
        "country": { type: String },
        "industry": { type: String },
        "linkedin_url": { type: String }
    }
);

// function afegirCompanyies() {
//     const totalCompanyies = companyiesJSON.length
//     console.log(totalCompanyies)

//     // for (let i = 0; i < totalCompanyies; i++) {
//         companyiesJSON.forEach(item => {
//             const empresa = item.create({
//                 "id": item.id,
//                 "website": item.website,
//                 "name": item.name,
//                 "founded": item.founded,
//                 "size": item.size,
//                 "locality": item.locality,
//                 "region": item.region,
//                 "country": item.country,
//                 "industry": item.industry,
//                 "linkedin_url": item.linkedin_url

//             });
//             console.log(empresa)
//             companyia.save(empresa);
//         });

// };
// afegirCompanyies();
// // (async function afegirCompanyia() {

// //     companyiesJSON.forEach(item => {
// //         const empresa = await companyia.create({
// //             "id": item.id,
// //             "website": item.website,
// //             "name": item.name,
// //             "founded": item.founded,
// //             "size": item.size,
// //             "locality": item.locality,
// //             "region" : item.region,
// //             "country" : item.country,
// //             "industry": item.industry,
// //             "linkedin_url": item.linkedin_url

// //         });
// //         companyia.save(empresa);

// //     }); 
// // })();



// // }
// // companyia.collection.insertMany(companyiesJSON, (err, inserted) => {
// //            assert.equal(null, err)
// //           assert.equal(3, inserted.insertedCount)

// //            db.close();



module.exports = mongoose.model('Companyia', companyia);