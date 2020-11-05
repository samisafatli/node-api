const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')  

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://localhost:27017/nodeapi', options )

requireDir('./src/models')

app.use('/api', require('./src/routes/routes'))

app.listen(PORT)