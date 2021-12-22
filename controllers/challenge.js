const Challenge= require("../models/challenge")
const express= require('express')
const app= express()
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'cashyapp', 
    api_key: '313655258477521', 
    api_secret: 'CKMyqbQiGb--yzS0D2bduCxSKLw',
    secure: true
  });

function downloadImage(req, res, next){
   //console.log(req.files)
     if (req.files) {
  
        // var file = req.files.file.image;
         var path_file= req.files.file.path;
         var ext_split = path_file.split('.');
         var file_ext = ext_split[1].toLowerCase();
        

     if (file_ext === 'png' || file_ext === 'jpg' || file_ext === 'jpeg' || file_ext === 'gif') {

        cloudinary.uploader.upload(path_file, function(err, result){
            if(err){
                 console.log("vous faites erreur")
                res.status(500).json({error: "error"})
            }


         Challenge.findOne({'_id': challengeId})
            .then(()=>{
             Challenge.findByIdAndUpdate(challengeId, {text: result.url})
                 .then(()=>res.status(200).json({message: "succès"}))
                 .catch(error=> res.status(400).json({error}))
            })
            .catch(error=> res.status(400).json({error}))
                

        
         })
     } 
     else {
         return removeFilesOfUploads(res, extension, "Ups, please upload a valid image file.");
     }
     } else {
         return res.status(400).send({challenge: "Ups, please upload any file."});
     }
}

function hello(req, res, next){
    res.status(200).json({message: "bienvenue à notre message"})
}
module.exports= {
    hello,
    downloadImage
}

