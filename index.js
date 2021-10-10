const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv');


//initialization
dotenv.config();
const app = express();
require('./database');
require('./passport/local-auth');


//settings
app.set('views', path.join(__dirname,'views')); //path.join() para unir directorios
app.engine('ejs', engine);  // aca le decimos utiliza ejs pero el motor ejs-mate
app.set('view engine','ejs');
app.set('port', process.env.PORT || 8080);


//middleweres
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //le dice no recivire archivo pesados
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.user = req.user;
    next();
});

//Routes
app.use('/',require('./routes/index.routes'));


// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
}); 
