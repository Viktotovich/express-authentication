const { Router } = require("express");
const signupRouter = Router();
const {
  getSignUpPage,
  postSignUp,
} = require("../controllers/signupController");

signupRouter.get("/", getSignUpPage);
signupRouter.post("/", postSignUp);

module.exports = signupRouter;
