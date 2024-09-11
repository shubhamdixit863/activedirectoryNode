const express=require("express");
const router=express.Router();
const {GetUsers}=require("../repos/user");

router.get("/",async function(req,res){
    try {
        const data=await GetUsers()
    res.json({
        message:"succcess",
        data
    })
        
    } catch (error) {
        console.log(error);
    }
    

})

router.get("/edit",async function(req,res){
    try {
        const data=await GetUsers()
    res.json({
        message:"succcess",
        data
    })
        
    } catch (error) {
        console.log(error);
    }
    

})

module.exports=router