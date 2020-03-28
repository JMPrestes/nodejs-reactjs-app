/**
 * Rota / Recurso
 * localhost:3333/users
 */


/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?".
 * Servem para filtros e paginação.
 * 
 * Route Params: Parâmetros utilizados para identificar recursos.
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
* npm install nodemon -D 
* Parâmetro -D: configurar como dependência de desenvolvimento no package.json
*/

/**
 * Bancos de Dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Requisições para bancos: 
 * Driver(SQL): SELECT * FROM users;
 * Query Builder (javascript => SQL): table('users').select('*');
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);