const router = require('express').Router()

const taskServices = require('./users.services')

router.get('/users', taskServices.getAllUsers)
router.post('/users', taskServices.postUser)

router.get('/users/:id', taskServices.getUserById)

module.exports = router