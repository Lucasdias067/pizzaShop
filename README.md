# Pizzashop Web

Este projeto é uma aplicação web para gerenciar uma pizzaria, desenvolvida utilizando React, TypeScript e Vite.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de construção de front-end rápida e moderna.

## Estrutura do Projeto

A estrutura principal do projeto é a seguinte:
pizzashop-web ├── node_modules/ ├── public/ ├── src/ │ ├── components/ │ ├── pages/ │ ├── services/ │ ├── styles/ │ ├── App.tsx │ └── index.tsx ├── .eslintrc.js ├── .gitignore ├── index.html ├── package.json ├── tsconfig.json └── vite.config.ts

## Scripts Disponíveis

No arquivo `package.json`, os seguintes scripts estão disponíveis:

- `dev`: Inicia o servidor de desenvolvimento utilizando o Vite.
- `dev:test`: Inicia o servidor de desenvolvimento em modo de teste.
- `build`: Compila o projeto utilizando TypeScript e Vite.
- `lint`: Executa o ESLint para verificação de código.
- `preview`: Inicia o servidor para pré-visualização do build.
- `test`: Executa os testes utilizando Vitest.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
npm run dev
