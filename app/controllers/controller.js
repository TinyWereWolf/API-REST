//utilisation du Model Book pour faire le lien avec la BDD
let BookModel = require("../models/BookModel");

exports.addToLibrary = (req,res) => {
// définition du controller
    let book = new BookModel({
        id: req.body.id,
        title: req.body.titre,
        author: req.body.auteur,
        nbPages: req.body.nbPages
    })
    book.save()
    .then((book) => res.send(book))
    .catch((err) => err.message)
}

exports.findAll = (req,res) => {
    BookModel.findAll({}, {"_id": 0,"titre": 1})
    .then((books) => res.send(books))
    .catch((err) => console.error(err.message))
}

exports.findOne = (req, res) => {
    console.log('Params:', req.params)
    BookModel.findOne({ "id": req.params.numLivre })
    .then((book) => {
        if(book == null){
            res.send('Book not found');
        }else{
            res.send(book);
        }
    })
    .catch((err) => console.error(err.message))
}

exports.findNbPages = (req, res) => {
    BookModel.findOne({"id": req.params.numLivre}, {"_id": 0, "nbPages":1})
    .then((book)=> res.send(book))
    .catch((err) => console.error(err, message))
}

exports.updateOne = (req, res) => {
    Livre.findOne({ "numero": req.params.numLivre}, {"_id": 1})
    .then((livre) => {
        let _id = livre._id
        let newBook = new BookModel({
            _id: _id,
            id: req.body.id,
            title: req.body.title,
            author : req.body.author,
            nbPages: req.body.nbPages
        })

        Livre.updateOne({ _id: _id }, newBook )
        .then((status) =>
            res.send(status))
        .catch((err) => console.error(err.message))
    })
    .catch((err) => console.error(err.message))
},

exports.deleteOne=(req, res) => {
    Livre.deleteOne({ "numero": req.params.numLivre })
        .then((book) =>
            res.send(book))
        .catch((err) => console.error(err.message))
}