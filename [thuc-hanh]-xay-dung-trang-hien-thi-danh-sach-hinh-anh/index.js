const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// setup for static file
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
})


app.listen(port, () => {
    console.log("You are listening on port", port);
})