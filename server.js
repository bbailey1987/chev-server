const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser')

const tag = require('./routes/tag')

const port = process.env.PORT || 3000

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
//app.use('/tags', tag)
app.use('/tag', tag)

app.listen(port, () => console.log(`Listenting on port ${port}`))

