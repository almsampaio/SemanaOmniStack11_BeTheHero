const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


// const connection = require('./database/connections')

//Desacoplando o módulo de rotas do express
const routes = express.Router()

routes.post('/sessions', SessionController.create)

//Listagem de ONGs
routes.get('/ongs', OngController.index)
//Cadastro das ONGs
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

//Exportando as rotas para outros arquivos
module.exports = routes