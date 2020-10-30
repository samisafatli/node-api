const mongoose = require('mongoose')

const requiredString = {
    type: String, required: true
}

const defaultDate = {
    type: Date, default: Date.now
}

const ProductSchema = new mongoose.Schema({
    title: requiredString,
    description: requiredString,
    url: requiredString,
    createdAt: defaultDate,
})

mongoose.model('Product', ProductSchema)