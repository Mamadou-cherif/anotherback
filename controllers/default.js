const express= require("express")
const app= express()

function bienvenue(req, res, next){
    res.status(200).json({message:"bienvenue"})
}
module.exports={bienvenue}