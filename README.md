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
