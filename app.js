const challengeRoutes=require("./routes/challenge")
const express= require("express")
const app=express()

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

next()
})


app.use("/api", challengeRoutes)
module.exports=app