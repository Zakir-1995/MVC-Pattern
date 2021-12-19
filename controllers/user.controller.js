const users = require('../models/users')
const path = require('path')

exports.getUsers = (req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/index.html'))
}

exports.postUsers = (req,res)=>{
    const name = req.body.name
    const age = req.body.age
    const user ={
        name,
        age
    }
    users.push(user)
    res.status(291).json({
        success:true,
        users
    })

}