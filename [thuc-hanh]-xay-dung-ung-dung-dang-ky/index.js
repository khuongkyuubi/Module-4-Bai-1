const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const port = 3000;
// setup multer
const upload = multer();
// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup static folder
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("register");
})

const arrayUser = [];

// upload.none() -> chỉ lấy data từ form
app.post("/user/register", upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        const user = {
            user: req.body.username,
            password: req.body.password
        }
        arrayUser.push(user);
        console.log(arrayUser);
        res.render("success", {user: user});
    } else {
        res.render("error");
    }
})


app.listen(port, () => {
    console.log("You are listening on port", port);
})