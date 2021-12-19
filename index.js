
const express = require('express')
const userRouter = require('./routes/user.route')
const productRouter = require('./routes/products.route')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(userRouter)
app.use(productRouter)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})