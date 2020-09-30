const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use('/pb/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/pb/budget', (req, res) => {
    
    //'use strict' is more security and more clear
    //reading JSON file
    let myBudget = require('./budget.json');
    console.log(myBudget);

    res.json(myBudget); //sending to the clinet
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/pb`)
});