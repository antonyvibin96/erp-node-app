const express=require("express")
const userRoute=express.Router();


userRoute.get("/",(req,resp)=>{
    resp.json("hello");
})

module.exports=userRoute;