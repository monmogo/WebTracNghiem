const express = require("express");
const app = express();
require("dotenv").config();
const layout = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public")); //
const homeController = require("./controllers/user/home-controller");
//
app.use(layout);
app.use("/", homeController);
app.listen(process.env.PORT, (_) => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
