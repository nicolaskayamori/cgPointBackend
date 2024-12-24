const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const BD_URL = process.env.DB_URL
const Point = require('./models/point.model.js')
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
   res.send("Node js API")
})


app.get("/api/points", async (req, res) => {
    try {
        const points = await Point.find({})
        res.status(200).json(points)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get("/api/point/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const point = await Point.findById(id)
        res.status(200).json(point)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/api/points', async (req, res) => {
    try {
        const point = await Point.create(req.body);
        res.status(200).json(point);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.connect(BD_URL)
  .then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
  .catch(() => console.log("Connection failed!"));


