const req = require("express/lib/request");
const res = require("express/lib/response");

module.exports = {
    login: (req, res) => res.render('pages/authentication/login'),
    register: (req, res) => res.render('pages/authentication/register'),
    api: require('./api')
}