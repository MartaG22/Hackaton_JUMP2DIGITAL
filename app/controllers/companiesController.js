const Companyia = require('../models/modelCompanies.js');



const companyiesOrdenadesPerTamany = async (req, res) => {
    // let llistat = "";

    try {
        const llistatOrdenatPerTamany = await Companyia.find().sort({ size: -1 });

        res.status(200).send(llistatOrdenatPerTamany);
    } catch (error) {
        res.status(400).send(error);
    }
};

const companyiesOrdenadesPerData = async (req, res) => {
    // let llistat = "";

    try {
        const llistatOrdenatPerData = await Companyia.find().sort({ founded: 1 });

        res.status(200).send(llistatOrdenatPerData);
    } catch (error) {
        res.status(400).send(error);
    }

};

const quantitatEmpreses = async (req, res) => {
    let missatge = "";
    
    try {
        // Número de empresas que hay en cada industria, 
        const empresesPerIndustria = await Companyia.aggregate({ group: industry });
        
        // Número de empresas que hay por cada rango de tamaños, 
        const empresesPerTamany = await Companyia.count({group: size});
        
        // Número de empresas que hay en cada año de creación
        const empresesPerAny = await Companyia.count({group: founded});

        res.status(200).send("Nombre d'empreses per cada industria:", empresesPerIndustria);
    } catch (error) {
        res.status(400).send(error);
    }
}


module.exports = { companyiesOrdenadesPerTamany, companyiesOrdenadesPerData, quantitatEmpreses };