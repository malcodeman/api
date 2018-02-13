const mongoose = require('mongoose');
const { Shema } = mongoose;

const UserSchema = ({
    email: {
        type: String,
        require: true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;