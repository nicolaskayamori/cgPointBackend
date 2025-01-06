const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const BD_URL = process.env.DB_URL
const app = express()
const pointRoute = require('./routes/point.route.js')
app.use(express.json())


app.use("/api/points", pointRoute)

mongoose.connect(BD_URL)
  .then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => console.log("Connection failed!"));


