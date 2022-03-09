const express = require('express')
const router = express.Router()

const tabuadaController = require('../controllers/tabuada')

router.get('/', tabuadaController.list)
router.get('/for/:num', tabuadaController.table)

module.exports = router
