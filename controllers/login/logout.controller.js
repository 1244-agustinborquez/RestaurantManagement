const logoutController = (req,res,next) => {
    req.logout();
    res.redirect('/');
}

module.exports = logoutController;