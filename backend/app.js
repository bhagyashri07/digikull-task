const express=require("express")
const coonectToMongo=require("./db")

const signUp = require("./routes/userRoute")
const signIn= require("./routes/userRoute")
const studentroute=require("./routes/StudentRoute")

const cors= require('cors');

coonectToMongo();
const port=process.env.port || 5000
const app=express();

app.use(cors())
app.use(express.json());

app.use("/api", signUp)//http://localhost:5000/api/signUp
app.use("/api", signIn)//http://localhost:5000/api/signIn
app.use('/api/student',studentroute)////////http://localhost:5000/api/student




app.listen(port,()=>{
    console.log("server is running at port"  + port)
})