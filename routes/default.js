const defaultController= require("../controllers/default")
const express= require("express")

const api= express.Router()

api.get("/", defaultController.bienvenue)

module.exports= api