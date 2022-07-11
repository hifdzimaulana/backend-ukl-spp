const Router = require('express').Router()
const { get, getById, insert, update, destroy } = require('../controllers/kelas')

const schemaValidation = require('../schema_validations/kelas.schema')

Router
    .get('/', get)
    .get('/:id', getById)
    .post('/', schemaValidation, insert)
    .patch('/:id', update)
    .delete('/:id', destroy)

module.exports = { Router, route: '/kelas' }