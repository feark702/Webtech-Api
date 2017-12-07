const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const contactsRouter = require('../Project')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', contactsRouter)

module.exports = app