const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Node Tabuada'))

module.exports = router
