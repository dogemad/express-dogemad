const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const path = require('path')
const routes = require('./routes')

const app = express()

app.use(logger(process.env.NODE_ENV || 'dev'))
app.use(express.json())
app.use(express.urlencoded({ limit: '100mb', extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes())

module.exports = app