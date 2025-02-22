const pool = require("../model/pool");

module.exports.getSignUpPage = async function (req, res) {
  res.render("pages/sign-up-form");
};

module.exports.postSignUp = async function (req, res) {
  try {
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      req.body.password,
    ]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
};
