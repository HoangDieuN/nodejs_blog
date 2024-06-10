const { response } = require("express");
const Course = require("../models/Course");

class SiteController {
  //[GET] /home
  async home(req, res, next) {
    const courses = await Course.find({})
      .lean()
      .then((courses) => {
        res.render("home", { courses });
      })
      .catch((err) => {
        next(err);
      });
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
