const { User } = require("../Model/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        //check data empty or not
        let { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({
                message: "some fields are missing",
            });
        }
        const isUserAlreadyExist = await User.findOne({ email });
        if (isUserAlreadyExist) {
            return res.status(400).json({
                message: "User already exist",
            });
        }

        //hash the password
        //no one can decode the password

        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password, salt);
        //hyaddress stored token login time
        //stored time database
        //jwt token
        const token = jwt.sign({ email }, "supersecret", { expiresIn: "365d" });

        //create user in database
        await User.create({
            name,
            email,
            password: passwordHashed,
            token,
            role: "user",
        });
        res.status(202).json({
            message: "User created successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(505).json({
            message: "internal server error",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "some fields are missing",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        const isPasswordMatch = bcrypt.compareSync(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }
        res.status(200).json({
            message: "login successfully",
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: user.token,


        });
    } catch (error) {
        console.log(error);
        res.status(505).json({
            message: "internal server error",
        });
    }
};

module.exports = { signup, login };