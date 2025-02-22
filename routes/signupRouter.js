const { Router } = require("express");
const signupRouter = Router();
const { getSignUpPage } = require("../controllers/signupController");

signupRouter.get("/", getSignUpPage);

module.exports = signupRouter;
