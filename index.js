const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://myAdmin:1234@127.0.0.1:27017/8_Mohamed_Al_AzawiProducts?authSource=admin');

// Create a schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

// Create a model
const Product = mongoose.model('Product', productSchema);

// Create a new product
const product = new Product({
    name: 'Laptop',
    price: 1000,
    description: 'A good laptop'
});

// Create a new product 2
const product2 = new Product({
    name: 'Phone',
    price: 500,
    description: 'A good phone'
});

// create a new product 3
const product3 = new Product({
    name: 'Tablet',
    price: 300,
    description: 'A good tablet'
});

// Save the product to the database
product.save()
.then(() => product2.save())
.then(() => product3.save())
.then(() => Product.find({}))
.then(products => {
    console.log(products);
    return Product.findOne({name: 'Phone'});
})
.then(product => {
    console.log(product);
    return Product.updateOne({name: 'Phone'}, {price: 600});
})
.then(product => {
    console.log(product);
    return Product.deleteOne({name: 'Tablet'});
})
.then(() => {
    console.log('Deleted');
})
.catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

