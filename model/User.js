const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6,

        },
        role: {
            type: String,
            default: 'user',

        },
        token: {
            type: String,
            required: true
        }

    }
)


const User = mongoose.model('User', userSchema);
module.exports = { User };