const express=require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./Route/user");
const app = express();
app.use(express.json());
const PORT=8000
app.get("/",(req,res)=>{
     res.status(200).send({msg:"Home Page"})
})

// user route 

app.use("/user",userRoute);

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected to Database...")
    }
    catch(e){
        console.log("Error",e)
    }
})