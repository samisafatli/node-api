const express = require('express')
const mongoose = require('mongoose')   

const app = express()

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/nodeapi', options )

app.get('/', (req, res) => {
    res.send('Hello bla')
})

app.listen(3001)