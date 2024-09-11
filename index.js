const express=require("express");
const app=express();
const roleRouter=require("./routes/role_management_route");
const userRouter=require("./routes/user_route");
const dbConnection=require("./db");

app.use("/api/role",roleRouter);
app.use("/api/user",userRouter);

app.listen(8090,()=>{
    console.log("Server started")
})
