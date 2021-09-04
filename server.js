const express = require("express");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT, (_) => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
