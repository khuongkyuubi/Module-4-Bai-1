const express =  require("express");
const app = express();
const path = require("path");
const port = 3000;
const array = require("./data/data");

// setup view engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    // res.json(array)
    res.render("home", {data: array})
})



app.listen(port, ()=> {
    console.log("You are listening on port", port)
})