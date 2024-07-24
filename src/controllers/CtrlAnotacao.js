const Anotacoes = require('../models/AnotacoesData');
const mongoose = require('mongoose');

module.exports = {

    async read(request,response){
        const listaAnotacoes = await Anotacoes.find();
        return response.json(listaAnotacoes);
    },

    async create(request, response) {
        const {title, notes, priority} = request.body;

        if (!notes || !title){
            return response.status(400).json({ error: "Necessário um título/anotação"});
        }

        const anotacaoCriada = await Anotacoes.create({
            title,
            notes,
            priority 
        });
        return response.json(anotacaoCriada); 
    },

    async delete(request, response) {
        const {id} = request.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log('ID inválido');
            return response.status(400).json({ error: 'ID inválido' });
        }

        try {
            const anotacaoDeletada = await Anotacoes.findOneAndDelete({ _id: id });
            console.log('Anotação deletada:', anotacaoDeletada);

            if (anotacaoDeletada) {
                return response.json(anotacaoDeletada);
            } else {
                return response.status(404).json({ error: "Não foi encontrado o registro indicado" });
            }
        } catch (erro) {
            console.error('Erro ao deletar anotação:', erro);
            return response.status(500).json({ error: 'Erro ao deletar anotação' });
        }
    

    }


};