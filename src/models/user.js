const mongoose = require("mongoose");


//Create a schema model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const User = mongoose.model("Course-User", userSchema);

//Export the User Model
module.exports = User;