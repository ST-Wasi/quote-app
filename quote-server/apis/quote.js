const express = require('express');
const Quote = require('../models/Quote');
const router = express.Router();

router.get('/quotes', async (req,res)=>{
    try {
        const quotes = await Quote.find();
    res.status(200).json(quotes);
    } catch (error) {
        res.status(500).send("Internal server Error");
    }
    
})

router.post('/quotes/new', async (req,res)=>{
    try {
        const {author,quote} = req.body;
    await Quote.create({author,quote});
    res.status(201).send({msg: "Quote Added Sucesfully"})
    } catch (error) {
        res.status(500).send({msg: "An Unexpected Error Occured While Adding New Quote"})
    }
    
})

router.get('/quote/:id', async (req,res)=>{
    try {
        const {id} = req.params;
    const quote = await Quote.findById(id);
    res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({msg: "Internal Server Error"});
    }
    
})

module.exports = router;