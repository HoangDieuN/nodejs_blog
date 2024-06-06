class SiteController {
  //[GET] /home
  home(req, res) {
    res.render("home");
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
