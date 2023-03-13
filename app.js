//Require and import Section
const express = require("express");
const app = express();
const port = 5050;
const taskRoute = require("./routes/tasks");
const connectdb = require('./database/database')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

//Middleware 
app.use(express.static('./public'))
app.use(express.json())

//Routes handler
app.use("/task", taskRoute);
app.use(notFound)
app.use(errorHandler)

//Running project server
const startConnection = async()=>{ 
  try{
    await connectdb(process.env.CONNECTION_URL)
    app.listen(port, () => {
      console.log("Your App is Running...");
    });     
  }catch (err) {
    console.log(err)
  }
}

startConnection()

