const express=require("express");
const router=express.Router();


router.get("/",async function(req,res){
    res.json({
        message:"succcess",
      
    })
       

})


module.exports=router
