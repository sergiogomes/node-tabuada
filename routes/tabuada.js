const express = require('express')
const router = express.Router()

const tabuadaController = require('../controllers/tabuada')

router.get('/', tabuadaController.list)

module.exports = router
