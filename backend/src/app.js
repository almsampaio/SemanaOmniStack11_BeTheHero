const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
//Trabalhando com dados no formato JSON
app.use(express.json())
//Usando as rotas exportadas
app.use(routes)
app.use(errors())

module.exports = app