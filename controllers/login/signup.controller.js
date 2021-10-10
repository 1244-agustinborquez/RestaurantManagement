const passport = require('passport');

const getSignup = (req,res,next) => {
    res.render('signup');
}

const postSignup = passport.authenticate('local-signup',{
    successRedirect: '/home',
    failureRedirect: '/signup',
    passReqToCallback: true
});

module.exports = {
    getSignup,
    postSignup
}