const express = require('express')

const routes = express.Router()

const BrawlerController = require('./controllers/BrawlerController')

routes.get('/brawlers', BrawlerController.index)
routes.get('/brawlers/:id', BrawlerController.showByID)
routes.post('/brawlers', BrawlerController.store)
routes.put('/brawlers/:id', BrawlerController.update)
routes.delete('/brawlers/:id', BrawlerController.delete)

module.exports = routes