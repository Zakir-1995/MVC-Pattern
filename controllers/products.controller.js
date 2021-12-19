const products = require('../models/products')
const path = require('path')

exports.getProducts = (req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/products.html'))
}

exports.postProducts = (req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const product ={
        name,
        price
    }
    products.push(product)
    res.status(201).json({
        success:true,
        products
    })

}