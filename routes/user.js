const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/user.js");


router.route("/signup")
    .get( userController.renderSignupForm)
    .post( wrapAsync(userController.signup));

router.route("/login")
    .get( userController.renderLoginForm)
    .get( userController.logout);

    
router.post("/login",saveRedirectUrl , passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), userController.login);

module.exports = router;