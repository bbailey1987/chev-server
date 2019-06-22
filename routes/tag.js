const express = require('express'),
    router = express.Router()

// Get home page
router.get('/', (req, res, next) => {
    res.send('Express RESTful API')
})

module.exports = router