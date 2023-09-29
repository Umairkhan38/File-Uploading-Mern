const express=require('express');
const app=express();

//find port
require('dotenv').config();
const PORT = process.env.PORT || 5000;


//adding middleware 
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());


//connection with database
const db=require('./config/database');
db.connect();


//cloud connection
const cloudinary = require('./config/cloudinary');
cloudinary.CloudinaryConnect();


//mounting api route
const Upload = require('./Routes/uploadFile');
app.use('/api/v1/upload',Upload);

//listening server
app.listen(PORT,()=>{
    console.log("the server is running on ",PORT)
})
