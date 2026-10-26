const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose'); 

async function connectDB(){
  try{
    await mongoose.connect(process.env.DB);
    console.log("DB connection success");
  }catch(err){
    console.log("error in DB connection");
    console.log(err.message);
    process.exit(0);
  }
}
connectDB();

const express = require("express");
const morgan = require("morgan");
const app = express();
app.listen(process.env.PORT,()=>{
  console.log('server running...'+process.env.PORT);
})
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// const {fetchProducts,createProduct,updateProduct,deleteProduct} = require("./controller/")
const {fetchProducts,createProduct,updateProduct,deleteProduct} = require('./controller/product.controller');
app.get("/product",fetchProducts);
app.post("/product",createProduct);
app.put("/product/:id",updateProduct);
app.delete("/product/:id",deleteProduct);
