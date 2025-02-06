import express from "express";
import cors from "cors"
import router from "./routes/user.route.js";
import "./database/dbconfig.js";
const app=express();
app.use(express.json());
app.use(cors());
app.use("/",router);


app.listen(4000,(req,res)=>{
    console.log("server is running on port 4000");
});