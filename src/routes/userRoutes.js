const express = require('express');
const userController = require("../Controllers/userController.js");
const userRouter = express.Router();

userRouter.post("/signup", userController.signup);

userRouter.post("/signin", userController.signin);

module.exports = userRouter;
