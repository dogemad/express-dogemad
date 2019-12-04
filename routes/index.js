const router = require('express').Router()

module.exports = () => {

  router.get('/', (req, res) => {
    const Example = require('../models')

    let model = new Example('1');

    res.send({ hello: 'world!', model: model.index })
  })

  /**
   * ignore favicon
   */

  router.get('/favicon.ico', (req, res) => {
    res.sendStatus(204)
  })

  return router
}