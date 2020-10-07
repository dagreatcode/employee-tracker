const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./db/connection");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    connection.query("SELECT * FROM employee", (err, data) => {
        console.log(data);
        res.render("index", {data: data});
    })
    
})

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
