
const Quote = require("./models/Quote")


const quotes = [
    {
        "author": "Wasiuddin",
        "quote": "I can I Will and I must Be a Winner"
    },
    {
        "author": "Sahil",
        "quote": "You can Do it"
    },
    {
        "author": "Anmol",
        "quote": "Focus On Your Goals"
    },
    {
        "author": "Binod",
        "quote": "I am Binod"
    },
    {
        "author": "Raju",
        "quote": "Yo Yo Honey Singh"
    },
]

async function seedDb(){
    await Quote.insertMany(quotes)
    console.log(`Db Seeded Sucesfully`)
}

module.exports = seedDb;