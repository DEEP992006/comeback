const express = require('express')
const app = express()
const port = 5000
const nr = require("./routes/groute")
const mongoose = require("mongoose")
const moncon = require("./core/db")
const mym = require("./model/model")
moncon().then(() => {
    console.log("connection success");
    
})
app.use(express.json())
app.use("/",nr)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})