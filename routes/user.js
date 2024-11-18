const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/user",(request,response)=>{
    
    console.log(__dirname); // -> Project folder path
    console.log(__filename); // -> File path

    response.sendFile(path.join(__dirname,"../views/user","index.html"))

})

module.exports=router;