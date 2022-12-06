const express = require('express');
// const connect = require("./db/db")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/', (req,res) => res.send('hello'))

app.listen(8080, () => {console.log('Server started on http://localhost:8080')})