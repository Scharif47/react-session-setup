const express = require("express");
const session = require("express-session");
require("dotenv").config({ path: "./utils/.env" });

const app = express();

const port = process.env.PORT || 5000;

app.use(
  session({
    secret: "sweet secret",
    cookie: { maxAge: 5 * 60 * 1000 },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  console.log("req.body: ", req.body);
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    console.log("req.session: ", req.session);
    req.session.user = { username, password };
    res.json("success")
  } else {
    res.json("Login error")
  }
});

app.post("/checkuser", (req, res) => {
  if(req.session.user) {
    res.json("success")
  } else {
    res.json("internal server error")
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})