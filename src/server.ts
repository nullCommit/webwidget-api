/**
 * GET - Buscar informação
 * POST - Cadastrar informação
 * PUT - Atualizar informação de uma entidade
 * PATCH - Atualizar informação única de uma entidade
 * DELETE - Deletar uma informação
 */

import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('HTTP server running!');
});
