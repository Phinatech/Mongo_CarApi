import express, { Application ,Request,Response} from "express"
const app:Application = express()
 app.use(express.json())
require("./config/db")
import carRouter from "./Router/carRouter"
const Port = 2046;

app.get("/",(req:Request,res:Response):Response =>{
    return res.status(200).json({
        message:"Server is up and listening"
    })
})

app.use("/api",carRouter)
app.listen(Port, ()=>{
    console.log("Sever is listening")
})
