const express = require('express');

const router = express.Router();

//Controllers:
const layoutController = require('../controllers/layout/layout.controller');
const {getSignup,postSignup} = require('../controllers/login/signup.controller');
const {homeController} = require('../controllers/home/home.controller');
const {getSignin,postSignin} = require('../controllers/login/signin.controller');
const logoutController = require('../controllers/login/logout.controller');

//middlewares
const isAuthenticated = require('../middlewares/index');

// Signup
router.get('/', layoutController);
router.get('/signup',getSignup);
router.post('/signup',postSignup);

//Sigin
router.get('/signin',getSignin);
router.post('/signin',postSignin);

//logout
router.get('/logout',logoutController);

//home
router.get('/home', isAuthenticated, homeController);






module.exports = router;