const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)