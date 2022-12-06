const { model,Schema } = require("mongoose")

const userSchema= new Schema({
    email:String,
    password: String
})
const Userdata= model("User", userSchema);
module.exports= Userdata;