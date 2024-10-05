const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id : Number,
    name : String,
    email : String,
    password : String
})

const UserModel = mongoose.model("signup", UserSchema)
module.exports = UserModel

