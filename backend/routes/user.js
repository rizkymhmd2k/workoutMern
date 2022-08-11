const express = require('express')
const Router = express.Router();
const {signupUser, loginUser} = require('../controllers/userController')

//loginroute
Router.post('/login', loginUser)

//signup
Router.post('/signup', signupUser)

module.exports = Router