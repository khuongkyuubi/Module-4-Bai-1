const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;
const path = require("path");
const blogRouter = require("./routes/blog.router")
const {urlencoded} = require("express");
// setup static files
app.use(express.static(path.join(__dirname, "public")));

// setup parser body request của method post
app.use(express.json()) // set up parse application/json
app.use(urlencoded({extended: true})); // setup parse body using qs library

// setup view engin end layout
// thay vì set views thì chỉ cần set layout, nó sẽ tự nhận views tỏng foler public
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", path.join("layouts", "layout"));

// use router
app.use("/blog", blogRouter);

app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
})


app.listen(port, () => {
    console.log("You are listening on port", port);
})