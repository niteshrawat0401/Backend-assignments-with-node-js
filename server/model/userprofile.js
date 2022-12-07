const { Schema,model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
},
  { strictQuery: false }
);

const Userdata = model("User", UserSchema);
module.exports = Userdata;