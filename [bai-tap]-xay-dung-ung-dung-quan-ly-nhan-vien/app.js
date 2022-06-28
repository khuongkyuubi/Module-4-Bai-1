const express = require('express');
const app = express();
const port = 3000;
const expressLayouts =require("express-ejs-layouts");
const employeeRouter = require("./routes/employee.router");
const path = require("path");

// setup server static file
app.use(express.static(path.join(__dirname,"public")));

// setup parse body
app.use(express.json()); // parse application/json
app.use(express.urlencoded({extended: true})); //parse body by qs

// setup view engine and layout
app.use(expressLayouts)
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

app.get("", (req, res)=> {
    res.render("index", {tittle: "Home page"})
})

// setup route blog

app.use("/employee", employeeRouter)
app.listen(port, ()=> {

    console.log("You are listening on port", port);
})