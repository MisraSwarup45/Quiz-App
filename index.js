const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/quizDB", {
    useNewUrlParser: true,
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

app.listen(process.env.PORT || 9002, () => {
    console.log("DB started at port 9002")
})