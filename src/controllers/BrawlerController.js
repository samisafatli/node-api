const mongoose = require('mongoose')

const Brawler = mongoose.model('Brawler')

module.exports = {
    async show(req, res){
        const { page = 1 } = req.query
        const brawlers = await Brawler.paginate({},{page, limit:10})
        return res.json(brawlers)
    },

    async showByID(req, res){
        const brawler = await Brawler.findById(req.params.id)
        return res.json(brawler)
    },

    async store(req, res){
        const brawler = await Brawler.create(req.body)
        return res.json(brawler)
    },

    async update(req, res){
        const brawler = await Brawler.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false})
        return res.json(brawler)
    },

    async delete(req, res){
        await Brawler.findByIdAndDelete(req.params.id, { useFindAndModify: false })
        return res.send()
    }
}