const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://user:kFynvRwG912gY4O0@cluster0.ydjqn8a.mongodb.net/anotacoes?retryWrites=true&w=majority';

mongoose.connect(dbConfig)
.then(() => console.log('MongoDB connected'))
.catch(erro => console.log('MongoDB connection error:', erro));



