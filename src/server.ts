import "reflect-metadata";
import express from "express";

import { router } from "./routes"

import "./database"

const app = express();

app.use(express.json())

app.use(router);

/**
 * GET => Buscar uma informação
 * POST => Inserir (criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 */

app.listen(3000, () => console.log("Server is running"));