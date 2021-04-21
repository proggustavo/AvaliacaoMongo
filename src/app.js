var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

var createUserRouter = require("./routes/create-user");
var showUserRouter = require("./routes/show-user");
var listUserRouter = require("./routes/list-users");
var updateUserRouter = require("./routes/update-user");
var deleteUserRouter = require("./routes/delete-user");

app.use("/", createUserRouter);
app.use("/", showUserRouter);
app.use("/", listUserRouter);
app.use("/", updateUserRouter);
app.use("/", deleteUserRouter);

module.exports = app;
