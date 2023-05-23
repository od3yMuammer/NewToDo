
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
    try {
        const { email, username } = req.body;
        const duplicate = await User.findOne({ email });
        if (duplicate) {
            throw new Error(`UserName ${email}, Already Registered`)
        }
        await User.create(req.body);
        res.json({ 
            status: true, 
            user: {
                email, username
            },
            success: 'User registered successfully' });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }


}
exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }
        let user = await User.findOne({email});
        if (!user) {
            throw new Error('User does not exist');
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    

        const token = await jwt.sign(tokenData, '1231231', { expiresIn: '1d' });
        console.log(token);
        res.cookies = token
        res.status(200).json({ status: true, success: "sendData", token: token });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}