const blogData = require("../data/blog.data");


class BlogController {
    constructor() {
    }

    renderBlog(req, res, next) {
        res.render("blog/blog", {
                                  title: "List blog today" ,
                                   blogData
                               });
        next();
    }

    createNewBlog(req, res, next) {
        const blog = req.body;
        blogData.push(blog);
        res.redirect("/blog");
        next();
    }


}

module.exports = new BlogController();