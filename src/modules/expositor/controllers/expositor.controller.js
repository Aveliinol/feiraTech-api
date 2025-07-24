const expositorModel = require('../models/expositor.model');

class ExpositorController{
    static async criarExpositor(req, res){
    try {
        const {nome, email, instituicao} = req.body;
        const expositor = expositorModel.create({nome, email, instituicao})
        res.status(201).json({msg: "Expositor cadastrado com sucesso"})
    } catch (error) {
        
    }
    }
}

module.exports = ExpositorController