const passport = require("passport");

const getSignin = (req,res,next) => {
    res.render('signin');
}

const postSignin = passport.authenticate('local-signin',{
    successRedirect: '/home',
    failureRedirect: '/signin',
    passReqToCallback: true
});

module.exports = {
    getSignin,
    postSignin
}