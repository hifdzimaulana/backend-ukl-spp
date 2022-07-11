const Router = require('express').Router()

const {
    get,
    getById,
    getWithPembayaran,
    insert,
    update,
    destroy,
    resultHandler
} = require('../controllers/petugas')
const schemaValidation = require('../schema_validations/petugas.schema')

Router
    .get('/', get)
    .get('/:id', getById)
    .get('/:id/pembayaran', getWithPembayaran)
    .post('/', schemaValidation, insert)
    .patch('/:id', update)
    .delete('/:id', destroy)

Router
    .use('/', resultHandler)

module.exports = { Router, route: '/petugas' }