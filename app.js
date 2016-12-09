const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index");
});


app.listen(3030, ()=> console.log("Server has started on port 3030."));