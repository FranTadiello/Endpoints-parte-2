import { Request, Response } from "express";
import PlanetaServices from "../services/planetaServices";

class PlanetasController {
  static getAllPlanetas = async (req: Request, res: Response) => {
    try {
      const planetas = await PlanetaServices.getAllPlanets();

      if (!planetas || planetas.length === 0) {
        return res.status(404).json({ mensagem: "nenhum planeta encontrado" })
      }

      res.status(200).json(planetas);
    } catch (error) {
      console.error("Erro ao buscar planetas:", error);

      res.status(500).json({
        mensagem: "Erro ao buscar planetas",
        detalhe: error instanceof Error ? error.message : String(error)
      })
    }
  };

  static getIdPlanetas = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const planetas = await PlanetaServices.getIdPlanets(id);

      if (!planetas) {
        return res.status(404).json({ mensagem: "Planeta não encontrado" });
      }

      res.status(200).json(planetas);
    } catch (error) {
      console.error("Erro ao buscar planetas:", error);
      res.status(500).json({
        mensagem: "Erro ao buscar planetas",
        detalhe: error instanceof Error ? error.message : String(error)
      })
    }
  };

  static adicionarPlaneta = async (req: Request, res: Response) => {
    try {
      const novoPlaneta = req.body;
      const planetaSalvo = await PlanetaServices.salvarPlaneta(novoPlaneta);
      res.status(201).json(planetaSalvo);
    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao salvar planeta",
        detalhe: erro instanceof Error ? erro.message : String(erro)
      });
    }
  }

  static atualizarPlaneta = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const novoDados = req.body;

      const planetaAtualizado = await PlanetaServices.atualizarPlaneta(id, novoDados);
      res.status(201).json(planetaAtualizado);
    } catch (erro) {
      res.status(404).json({
        mensagem: "Erro ao atualizar planeta",
        detalhe: erro instanceof Error ? erro.message : String(erro)
      });
    }
  }

  static deletarPlaneta = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const sucesso = await PlanetaServices.deletarPlaneta(id);

      if (!sucesso) {
        return res.status(404).json({ mensagem: "Planeta não encontrado" });
      }

      res.status(201).json({ mensagem: "Planeta deletado com sucesso" });

    } catch (erro) {
      res.status(500).json({
        mensagem: "Erro ao deletar planeta",
        detalhe: erro instanceof Error ? erro.message : String(erro)
      });
    }
  }
}

export { PlanetasController };




// controller nao pode ter lógica de negócio, apenas chamar o service
// ela serve para tratar os erros e deixá-los mais amigáveis para o usuário
// deve-se usar condicionais, try catch, etc. para tratar os erros
// e devolver uma resposta amigável para o usuário
// pesquise sobre status code e como usá-los para tratar erros de forma eficiente e amigável
// mas também atente-se para não expor informações sensíveis ao usuário