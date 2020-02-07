var express = require('express');
var router = express.Router();
var controller = require("../controllers/controller");

// home
router.get('/', function(req, res){
    res.send({message:"API de gestion des livres"})
})

//books' list
router.get('/livres', function(req, res){
    controller.findAll(req, res)
})

//Search for a book
router.get('/livres/:numlivre', function(req, res){
    controller.findOne(req, res)
})

//Search for a page
router.get('/livres/:numlivre/pages/:numpages', function (req,res){
    controller.findNbPages(req, res)
})

//add a book into your library
router.post('/livres', function(req, res){
    controller.addToLibrary(req, res)
})

//modify the library
router.put('/livres', function(req, res){
    controller.updateOne(res, req)
})

//delete a book
router.delete('/livres/:id', function(req, res){
    controller.deleteOne(req, res)
})

module.exports = router