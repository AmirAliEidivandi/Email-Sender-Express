const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const port = 3000;
const sendEmailRouter = require('./routes/sendEmail.router')

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("contact");
});

app.use('/', sendEmailRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
