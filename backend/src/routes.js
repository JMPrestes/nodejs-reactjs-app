/*

routes.post('/users', (request, response) => {
    
    const corpo = request.body;

    console.log(corpo);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        titulo: 'Alunos'
    });
});

routes.post('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 12.0',
        aluno: 'Jordan Mendes Ribeiro'
    });
});

*/

const express = require('express');
const SessionController = require('./controllers/SessionController')
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ong', OngController.index);
routes.post('/ong', OngController.create);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;