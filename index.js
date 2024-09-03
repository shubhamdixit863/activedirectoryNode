const express=require("express");
const app=express();
const roleRouter=require("./routes/role_management");
const dbConnection=require("./db");

app.use("/api/role",roleRouter)

dbConnection().then(connection=>{
    app.listen(8080,()=>{
        console.log("Server started")
    })

}).catch(err=>{
    console.log(err);
})
