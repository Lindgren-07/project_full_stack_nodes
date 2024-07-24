const mongoose = require('mongoose');

const AnotacaoDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
});

module.exports = mongoose.model('Anotacoes',AnotacaoDataSchema);