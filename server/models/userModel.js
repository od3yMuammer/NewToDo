const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "userName can't be empty"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
},{timestamps:true});


// used while encrypting user entered password
userSchema.pre("save",async function(){
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(this.password,salt);
        this.password = hash;
    }catch(err){
        throw err;
    }
});


userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model('user',userSchema);
module.exports = User;