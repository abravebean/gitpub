const express = require('express');
const drinks = require('./models/drink.js');
const app = express();

app.get('/drinks', (req, res) => {
//res.send('Welcome to the Gitpub App!');
//res.send(drinks);
res.render('drinks_index.ejs', {
    allDrinks: drinks,
    title: 'index'
})
})

app.listen(3001, () => {
    console.log('listening');
  });