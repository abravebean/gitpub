const express = require("express");
const app = express();
const PORT = 3000;
const drinks = require("./models/drinks.js");
const foods = require("./models/foods.js");

// Root Route - Welcome
app.get("/", (req, res) => {
  res.send("Welcome to the GitPub App!");
});

// Index Route - show all of the drinks
app.get("/drinks/", (req, res) => {
  res.render("drinks_index.ejs", { drinks: drinks });
});

// Show Route - show a specific drink
app.get("/drinks/:id", (req, res) => {
  res.render("drinks_show.ejs", { drink: drinks[req.params.id] });
});

//FOOD

// Index Route - show all of the drinks
app.get("/foods/", (req, res) => {
  res.render("foods_index.ejs", { foods: foods });
});

// Show Route - show a specific drink
app.get("/foods/:id", (req, res) => {
  res.render("foods_show.ejs", { foods: foods[req.params.id] });
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});