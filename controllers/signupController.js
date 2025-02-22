const db = require("../model/pool");

module.exports.getSignUpPage = async function (req, res) {
  res.render("pages/sign-up-form");
};

module.exports.postSignUp = async function (req, res) {};
