require('dotenv').config()
const mongoose = require('mongoose')
const User = require ('../models/userModel')
const jwt = require ('jsonwebtoken')

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET , {expiresIn:'3d'})
}

//loginUser
// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await User.login(email, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  

//signUser
const signupUser = async(req,res)=>{
    
    const{email, password}=req.body
    //create try and catch method to send error we created in models
    try {
        const user = await User.signup(email, password)

        //create a Token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message}) //custom error or mongoose error (schema)

    }
}

module.exports = {signupUser, loginUser}
