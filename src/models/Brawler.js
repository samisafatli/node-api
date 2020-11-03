const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const requiredString = {
    type: String, required: true
}

const defaultDate = {
    type: Date, default: Date.now
}

const BrawlerSchema = new mongoose.Schema({
    name: requiredString,
    description: requiredString,
    type: requiredString,
    createdAt: defaultDate,
})

BrawlerSchema.plugin(mongoosePaginate)

mongoose.model('Brawler', BrawlerSchema)