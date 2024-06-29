const express = require('express')
const app = express();

const { updateCache, check } = require("./cache");

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/list', async(req, res) => {
    const year = new Date().getFullYear();
    const API = `https://date.nager.at/api/v3/PublicHolidays/${year}/US`

    const data = await fetch(API).then((res) => res.json());
    return res.json(data);
})

app.get('/update', async(req, res) => {
    const year = new Date().getFullYear();

    await updateCache(year);
    return res.send("Updated Cache");
})

app.get('/check', async(req, res) => {
    const date = new Date().toJSON().slice(0,10)
    const isTrue = await check(date);
    if(isTrue){
        res.send('Is a public holiday')
    }
    else{
        res.send('Not a public holiday')
    }
})

app.listen(port, () => {
    console.log(`Wells Fargo App listening on port ${port}`)
})