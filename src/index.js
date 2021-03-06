// arquivo de configuração da aplicação
var http = require("http");
var express = require("express");
var app = require("./app");
var { nanoid } = require("nanoid");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://gustavo:gustavo@cluster0.qezch.mongodb.net/db_fut?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//create a server object:
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listennig on ", port));
