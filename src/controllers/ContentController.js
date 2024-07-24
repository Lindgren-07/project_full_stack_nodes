const Anotacoes = require('../models/AnotacoesData');

module.exports = {

    async update(request,response) {
        const { id } = request.params;
        const { notes } = request.body;

        const annotation = await Anotacoes.findOne({ _id : id});

        if(notes) {
            annotation.notes = notes;
            await annotation.save();
        }

        return response.json(annotation);

        

    }
}