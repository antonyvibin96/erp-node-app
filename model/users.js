const mongoose= require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    hash:{
        type:String,
        required:true,
        default:{ $rand: {}}
    },
    displayName:{
      type:String,
      required:true
    }
});

module.exports=mongoose.model("users",userSchema);