const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
require('dotenv').config()


const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.MONGO_URL, options )

requireDir('./src/models')

app.use('/api', require('./src/routes/routes'))

app.listen(process.env.PORT || PORT)