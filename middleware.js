const express = require('express')
const app = express()

// Req => Middleware => Res 


app.listen(1000 , ()=>{
    console.log('Middleware Understand')
})