const { response } = require("express");
const Course = require("../models/Course");

class CourseController {
  //Get courses/:slug
  show(req, res) {
    res.render("Course");
  }
}
module.exports = new CourseController();
