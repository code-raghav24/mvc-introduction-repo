const {Schema, model} = require("mongoose");

const productSchema = new Schema({
  name:String,
  details:String,
  price:Number,
  discount:Number,
})

const ProductModel = model('Product',productSchema);

module.exports = ProductModel;
