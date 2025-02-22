const { Router } = require("express");
const signupRouter = Router();
const {
  getSignUpPage,
  postSignUp,
} = require("../controllers/signupController");

signupRouter.get("/", getSignUpPage);
signupRouter.post("/sign-up", postSignUp);

module.exports = signupRouter;
