const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance')


mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}.'"
