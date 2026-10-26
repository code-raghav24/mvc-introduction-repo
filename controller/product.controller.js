const ProductModel = require("../model/product.model"); 
const mongoose = require("mongoose");

const createProduct = async(req,res)=>{
  try{
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  }catch(err){
    console.log(err.message);
  }
}

const fetchProducts = async(req,res)=>{
  try{
    const products = await ProductModel.find();
    res.status(200).json(products);
  }catch(err){
    console.log(err.message);
  }
}

const updateProduct = async(req,res)=>{
  try{
    const {id} = req.params;
    if(! mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({
        error:"bad request",
        message:"provided id isn't valid 24 hex string"
      })
    }
    const updatedProduct = await ProductModel.findByIdAndUpdate(id,req.body,{returnDocument:'after'});
    if(!updatedProduct){
      return res.status(404).json({
        message:"product not found"
      })
    }
    res.status(200).json(updatedProduct);
  }catch(err){
    console.log(err.message);
  }
}

const deleteProduct = (req,res)=>{
  try{
    res.send("delete Product");
  }catch(err){
    console.log(err.message);
  }
}

module.exports = {
  createProduct,
  fetchProducts,
  updateProduct,
  deleteProduct,
}
