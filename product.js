const mangoose = require('mongoose');
const Schema = mangoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

module.exports = mangoose.model('Product', productSchema);