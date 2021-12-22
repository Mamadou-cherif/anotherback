const mongoose= require('mongoose')

const challengeSchema= mongoose.Schema({
    urlImage: {type:String, require: true}
})

module.exports= mongoose.model('challenge', challengeSchema)