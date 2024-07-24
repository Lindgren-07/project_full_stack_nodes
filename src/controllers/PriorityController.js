const Anotacoes = require('../models/AnotacoesData');

module.exports = {

    async read(request,response){
        const priotity = request.query;

        const priotityNotes = await Anotacoes.find(priotity);
        return response.json(priotityNotes);
    },

    async update(request,response) {
        const { id } = request.params;

        const annotation = await Anotacoes.findOne({_id : id})

        if(annotation.priority){
            annotation.priority = false;
        }
        else{
            annotation.priority = true;
        }

        await annotation.save();

        return response.json(annotation);
    }

};