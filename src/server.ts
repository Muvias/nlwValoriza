import "reflect-metadata";
import express from "express"; 

import "./database"

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir (criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 */

app.listen(3000, () => console.log("Server is running"));