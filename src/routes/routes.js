const express = require('express')

const routes = express.Router()

const BrawlerController = require('../controllers/BrawlerController')

routes.get('/', (res, req) => {
    res.send('Working')
})

routes.get('/brawlers', BrawlerController.show)
routes.get('/brawlers/:id', BrawlerController.showByID)

routes.post('/brawlers', BrawlerController.store)

routes.put('/brawlers/:id', BrawlerController.update)

routes.delete('/brawlers/:id', BrawlerController.delete)

module.exports = routes