import { Router } from "express";
import { PlanetasController } from "../controllers/planetasController";

export const planetasRouter = Router();

planetasRouter.get("/planetas", PlanetasController.getAllPlanetas);
planetasRouter.get("/planetas/:id", PlanetasController.getIdPlanetas);
planetasRouter.post("/planetas", PlanetasController.adicionarPlaneta);
planetasRouter.put("/planetas/:id", PlanetasController.atualizarPlaneta);
planetasRouter.delete("/planetas/:id", PlanetasController.deletarPlaneta);

