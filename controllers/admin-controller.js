const fun = require('../functions');


const getHome = async function(req, res) {
    // res.render('forms/signup')
    res.send('forms/signup');
}

exports.getHome = getHome;
