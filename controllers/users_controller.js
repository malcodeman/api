const User = require('../models/user');

module.exports = {
    greeting(req, res) {
        res.send("Hi there");
    },
    create(req, res) {
        const userProps = req.body;
        User.create(userProps)
            .then(user => res.send(user))
            .catch(error => console.log(error));
    },
    get(req, res) {
        User.find({})
            .then(users => res.send(users))
            .catch(error => console.log(error));
    }
}