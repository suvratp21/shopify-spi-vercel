const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send("Server is loading...");
});
app.listen(8000,console.log("sever is started"));
