const { Router } = require("express");
const Userdata = require("../model/userprofile");

const authRouter = Router();
// Sign up
authRouter.post("/signup", (req, res) => {
  const user = new Userdata(req.body);
  user.save((err, success) => {
    try {
      return res
        .status(201)
        .send({ message: "Sign up Successfully", user: success["_doc"] });
    } catch (error) {
      return res.status(500).send({ message: "Something wen wrong" });
    }
  });
});

//   login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const validuser = await Userdata.find({ email, password });
  if (validuser.length < 1 || !validuser) {
    return res.status(401).send({ message: "Invalid Credentials" });
  } else {
    return res.status(201).send(validuser);
  }
});

// Get All account
authRouter.get("/account", async (req, res) => {
  const validuser = await Userdata.find();
  if (validuser) {
    return res.status(201).send(validuser);
  } else {
    return res.status(401).send({ message: "Invalid" });
  }
});

module.exports = authRouter;
