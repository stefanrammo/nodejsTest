var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Index' });
});

router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Index' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});


module.exports = router;
