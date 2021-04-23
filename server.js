const express = require("express");
const app= express();
const mongoose= require("mongoose");
const cors=require("cors");
require("dotenv").config();

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true ,useUnifiedTopology: true });

const db= mongoose.connection;
db.on("error",()=>console.log("error"));
db.once("open",()=>console.log("connected to db"));


app.use(express.json());
app.use(cors());

app.listen(process.env.NODE_PORT,()=>{
    console.log("server started");
})

