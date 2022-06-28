const express = require('express');
const router = express.Router();
const blogData = require("../data/blog.data");
const blogController = require("../controllers/blog.controller");


router.get("/", blogController.renderBlog);
router.post("/", blogController.createNewBlog);


module.exports = router;