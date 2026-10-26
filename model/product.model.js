const {Schema, model} = require("mongoose");

const productSchema = new Schema({
  title:{
    type:String,
    required:true,
    trim:true,
    maxlength:10
  },
  description:{
    type:String,
    required:[true,'desc pani halna yeh'],
    trim:true,
  },
  price:{
    type:Number,
    required:[true,'price hal gandu'],
  },
  discount:{
    type:Number,
    enum:[0,10,20,30,40,50],
    default:0,
  }
},{timestamps:true})

productSchema.pre('save',async function(next){
  console.log("i will run before you store something");
  const count = await model('Product').countDocuments();
  if(count >=15)
    throw next(new Error("no more than 15 products"))
  next;
})
const ProductModel = model('Product',productSchema);

module.exports = ProductModel;
