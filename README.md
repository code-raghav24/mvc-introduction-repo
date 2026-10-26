## This repo is to understand the MVC architecture followed to make small to medium level applications 

# MVC
- It stands for Model, View, Controller.
- Certain types of code resides on specific directory. Also, sometimes called as **project scaffloding**.
- There is three directories created; as name suggests: **model,view,controller**.
- At **model/** Code related to Database, such as schema blueprint, database middleware are written.
- At **view/** User Interface (UI) code are written.
- At **controller/** logic related to different routes are written.
## Why follow such structure ?
- ease to navigate in the larger code base.
- moduler code simplfies the code readiability.

## dotenv package
- inside .env file all the environment variables are stored.
- confidential data are stored.
- they are stored in the node js instance where node is installed in the server, not in database or client side.
- convention to follow is: 
   DB_STRING = database connection string
   PORT = 8080
- they are stored as string no need to enclose with " ".
- dotenv.config() function call adds our defined variables with node js maintaied object
- console.log(process.env) to see the object maintained by node js
### This repo just demonstrates the basic CRUD operation using mongoose
- Product is the name of collection.
- productSchema defines the blueprint of what all fields should exists.
- ProductModel is the function,through which operations are performed.
---
## SCHEMA VALIDATION
- Before validation, undestand what defining schema did
- It ignored the extra fields that was sent to the database, it wasn't able to validate "*saying these fields are missing i would not accept it.*"
- even if we didn't send certain fields that was defined in the schema, it was letting to enter into the database.
- so due to this reason we needed validation.
### Validation strength
- we define the rules or format that a data should follow before entering into database.
- in mongoose it is simple, we name the field and pass an object defining the feature it needs to follow
```js
const productSchema = new Schema({
     title:{
          type:String,
          required:true,
          trim:true,
          lowercase:true,
          maxlength:150
     },
     description:{
          type:String,
          trim:true,
          lowercase:true // required not given, filed could be missing
     },
     price:{
          type:Number,
          required:true,
     },
     discount:{
          type:Number,
          enum:[0,10,20,30,40,50], // only these options are allowed
          default:0, //even if field not given will be stored with default value 0
     },
     status:{
          type:String,
          required:true,
          enum:["inStock","outOfStock"], // [active,inactive,blocked] [free,pro,plus]
          default:"inStock"
     }
})
```
- this isdemonstration to add **Custom Validation**.
```js
const isEmailValid = (email)=>{
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const result = emailRegex.test(email);// this gives true, false
     return result;

}
const userSchema = new Schema({
     email:{
          type:String,
          required:true,
          trim:true,
          lowercase:true,
          validate:{
               validator: isEmailValid,
               message:"Invalid email address",
          }
     },
     gmail:{
          match:[
               "/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/i",
               "Invalid gmail address"
          ]
     }
})
```
