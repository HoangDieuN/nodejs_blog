const express = require("express");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const path = require("path");
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
db.connect();

app.use(express.static(path.join(__dirname, "./resources/public")));
//sử dụng middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Http logger( ghi log)
// app.use(morgan("combined"));
//Http template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port locahost:${port}`);
});
