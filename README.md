# 🌌 API de Planetas — Endpoints com TypeScript

Este é um projeto desenvolvido durante o processo de nivelamento da E-acelera, com foco em criar uma API REST utilizando **Node.js**, **Express** e **TypeScript**. O sistema simula operações relacionadas a planetas, como listar, buscar por nome, adicionar e deletar planetas.

## 🚀 Objetivo

O objetivo é consolidar conhecimentos sobre:
- Estruturação de projetos com Node.js e TypeScript
- Criação de endpoints usando o Express
- Manipulação de dados em memória
- Boas práticas no desenvolvimento backend

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- ts-node

## 📁 Estrutura do Projeto
src/ ├── controllers/ │ └── planetasController.ts ├── models/ │ └── planeta.ts ├── routes/ │ └── planetasRoutes.ts └── server.ts

## 🧪 Endpoints Implementados

- `GET /planetas` → Lista todos os planetas
- `GET /planetas/:nome` → Busca um planeta por nome
- `POST /planetas` → Cria um novo planeta
- `DELETE /planetas/:nome` → Remove um planeta por nome

## 📦 Instalação

1. Clone o repositório:
   git clone https://github.com/seu-usuario/seu-repositorio.git
2. Instale as dependências:
    npm install
3. Execute o servidor em modo desenvolvimento:
    npm run dev

## ✅ Requisitos
- Node.js instalado
- npm instalado
