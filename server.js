const express = require("express");
const path = require("path");
const products = require("./data");
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname)));
app.set("view engine", "ejs");
app.set("views", __dirname);

app.get("/", (req, res) => {
  res.render("index", { products });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running server on port:", port);
  console.log("--------------------------");
});
