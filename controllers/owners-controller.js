const fun = require('../functions');


const getHome = async function(req, res) {
    // res.render('forms/signup')
    res.send('hello');
}

exports.getHome = getHome;
