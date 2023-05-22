const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  _user:{
    type:Object,
    required : true
  },
  done:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

module.exports = mongoose.model("Task", taskSchema);
