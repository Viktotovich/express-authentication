const db = require("../model/queries");
const bcrypt = require("bcryptjs");

module.exports.getSignUpPage = async function (req, res) {
  res.render("pages/sign-up-form");
};

module.exports.postSignUp = async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await db.addNewUser(req.body.username, hashedPassword);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
};
