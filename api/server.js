const express = require("express");
const recipeRouter = require("./recipes-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("<h2>Server is running, call endpoints for recipe</h2>");
});

module.exports = server;
