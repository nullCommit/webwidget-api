/**
 * GET - Buscar informação
 * POST - Cadastrar informação
 * PUT - Atualizar informação de uma entidade
 * PATCH - Atualizar informação única de uma entidade
 * DELETE - Deletar uma informação
 */

import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!');
});
