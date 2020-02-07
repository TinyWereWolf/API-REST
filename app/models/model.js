//utilisation du module mongoose
let mongoose = require ('mongoose');
//utilisation des promesses standards de nodejs
mongoose.Promise = global.Promise
//schéma d'un document de la collection biblio
let bookSchema = mongoose.Schema({
    id : {type: Number,required:true},
    title : { type : String, required:true},
    author : String,
    nbPages: {type: Number, min: 5, max : 900, required : true}, 
});

let BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel
