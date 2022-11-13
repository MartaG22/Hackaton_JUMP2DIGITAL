const Companyia = require('../models/modelCompanies.js');



const companyiesOrdenadesPerTamany = async (req, res) => {
    let llistat = "";

    try {
        const llistatOrdenatPerTamany = await Companyia.find().sort({ size: -1 });

        res.status(200).send(llistat);
    } catch (error) {
        res.status(400).send(error);
    }
};

const companyiesOrdenadesPerData = async (req, res) => {
    let llistat = "";

    try {
        const llistatOrdenatPerTamany = await Companyia.find().sort({ founded: 1 });

        res.status(200).send(llistat);
    } catch (error) {
        res.status(400).send(error);
    }

};

const quantitatEmpreses = async (req, res) => {
    let missatge = "";
    
    try {
        // Número de empresas que hay en cada industria, 
        const empresesPerIndustria = await Companyia.count({ group: industry });
        
        // Número de empresas que hay por cada rango de tamaños, 
        const empresesPerTamany = await Companyia.count({group: size});
        
        // Número de empresas que hay en cada año de creación
        const empresesPerAny = await Companyia.count({group: founded});

        res.status(200).send(missatge);
    } catch (error) {
        res.status(400).send(error);
    }
}

// companyiesOrdenadesPerData
// quantitatEmpreses


module.exports = { companyiesOrdenadesPerTamany, companyiesOrdenadesPerData, quantitatEmpreses };