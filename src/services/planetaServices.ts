import fs from "fs/promises";
import path from "path";
import { client } from "../client";
import { Planeta } from "../models/planetas";

const caminhoArtigo = path.resolve(__dirname, "../models/planeta.json");
class PlanetaServices {
  public static async getAllPlanets(): Promise<any> {
    let listaPlanetas: Planeta[] = [];

    try {
      let response = await client.get("planets/");
      listaPlanetas.push(response.data.results);

      while (response.data.next) {
        response = await client.get(response.data.next);
        listaPlanetas.push(...response.data.results);
      }

      if (listaPlanetas.length > 0) {
        return listaPlanetas;

      } else {
        return "Error fetching data";
      }

    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }
  
  public static async getIdPlanets(id: number): Promise<Planeta | null> {
    try {
      const dados = await fs.readFile(caminhoArtigo, "utf-8");
      const planetas: Planeta[] = dados ? JSON.parse(dados) : [];

      const planeta = planetas.find((planeta) => planeta.id === id);

      return planeta || null;
    } catch (error) {
      throw error;
    }
  }
  
  public static async salvarPlaneta(planeta: any): Promise<any> {
    try {
      const dados = await fs.readFile (caminhoArtigo, "utf-8");
      const planetas = dados ? JSON.parse(dados) : [];
  
      const novoPlaneta = {
        id: Date.now(),
        ...planeta
      };
      planetas.push(novoPlaneta);
  
      await fs.writeFile (caminhoArtigo , JSON.stringify(planetas, null, 2));
      return novoPlaneta;
    } catch (erro) {
      throw erro;
    }
  }

  public static async atualizarPlaneta(id: number, novosDados: any): Promise<any> {
    try {
      const dados = await fs.readFile (caminhoArtigo, "utf-8");
      const planetas = dados ? JSON.parse(dados) : [];
  
      const indice = planetas.findIndex((planeta:any) => planeta.id === id);
      if ( indice === -1) {
        throw new Error("Planeta não encontrado");
      }    
  
      planetas[indice] = {
        ...planetas[indice],
        ...novosDados,
        id: planetas[indice].id,
      }

      await fs.writeFile(caminhoArtigo, JSON.stringify(planetas, null, 2));
      return planetas[indice];
    } catch (erro) {
      throw erro;
    }
  }
  
  public static async deletarPlaneta(id: number): Promise<any> {
    try {
      const dados = await fs.readFile (caminhoArtigo, "utf-8");
      const planetas = dados ? JSON.parse(dados) : [];
  
      const indice = planetas.findIndex((planeta:any) => planeta.id === id);
      if ( indice === -1) {
        throw new Error("Planeta não encontrado");
      }    

      const planetaRemovido = planetas.splice(indice, 1)[0];

      await fs.writeFile(caminhoArtigo, JSON.stringify(planetas, null, 2));
      return planetaRemovido;
    } catch (erro) {
      throw erro;
    }
  }
}

export default PlanetaServices;
