const express = require('express');
const Quote = require('../models/Quote');
const router = express.Router();

router.get('/quotes', async (req,res)=>{
    try {
        const quotes = await Quote.find();
    res.status(201).json(quotes);
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

module.exports = router;