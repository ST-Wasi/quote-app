const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const quotesApis = require('./apis/quote');
const dotenv = require('dotenv').config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))



// routes
app.use(quotesApis)

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("DB connected")
    app.listen(process.env.PORT,()=>{
        console.log(`Server Started Listening at PORT ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Something went wrong while connecting to the Database")
})