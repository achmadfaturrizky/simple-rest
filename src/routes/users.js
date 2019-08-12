const express = require('express')
const Route = express.Router()

const UserController = require('../controllers/users')

Route
    .get('/', UserController.getAll)
    .post('/', UserController.insertData)
    
module.exports = Route