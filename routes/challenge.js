const challengeController= require('../controllers/challenge')
const express= require('express')
const api= express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/images'}); 
api.get("/aze", challengeController.hello)
api.post("/upload",[md_upload], challengeController.downloadImage)

module.exports= api