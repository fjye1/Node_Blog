import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use((req, res, next) => {
  const today = new Date();
  res.locals.today = today;
  res.locals.year = today.getFullYear();
  next();
});

app.get("/", (req, res) => {

  res.render("index.ejs");
});

app.get("/blog" ,(req,res) => {
    res.render("blog.ejs")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});