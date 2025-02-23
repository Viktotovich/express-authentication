const db = require("../model/queries");

module.exports.getSignUpPage = async function (req, res) {
  res.render("pages/sign-up-form");
};

module.exports.postSignUp = async function (req, res) {
  await db.addNewUser(req.body.username, req.body.password);
  res.redirect("/");
};
