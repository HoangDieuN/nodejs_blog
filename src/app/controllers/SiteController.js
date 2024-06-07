const Course = require("../models/Course");

class SiteController {
  //[GET] /home
  async home(req, res) {
    const courses = await Course.find({});
    res.json(courses);
    // res.render("home");
  }
  //[Get] /contact
  contact(req, res) {
    res.render("contact");
  }
  //[Get] /contact
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
