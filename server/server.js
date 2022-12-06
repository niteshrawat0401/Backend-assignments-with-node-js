const express = require('express');
const connection= require("./db/db");
const authRouter= require("./Routes/user")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/users", authRouter)
app.get('/', (req,res) => res.send('hello'))

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
    await connection
    console.log('Server started on http://localhost:8080')})