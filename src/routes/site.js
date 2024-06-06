var express = require("express");
var router = express.Router();

const siteController = require("../app/controllers/SiteController");
router.use("/contact", siteController.contact);

router.use("/search", siteController.search);

router.use("/", siteController.home);

// newsController.index;

module.exports = router;
