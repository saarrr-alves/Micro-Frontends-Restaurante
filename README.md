# Micro-frontend

Projeto de estudo e demonstração de uma arquitetura baseada em **micro-frontends**, permitindo dividir uma aplicação web em partes independentes, desenvolvidas e implantadas separadamente.

## Objetivos

- Organizar a aplicação em módulos independentes;
- Facilitar a manutenção e a evolução de cada parte do sistema;
- Permitir o uso de diferentes equipes e ciclos de desenvolvimento;
- Demonstrar a integração entre aplicações frontend via **Next.js** e **Module Federation**.

## Repositórios e Portas

A aplicação é composta por três projetos independentes que devem rodar simultaneamente nas seguintes portas:

| Aplicação | Descrição | Porta | Repositório |
| :--- | :--- | :---: | :--- |
| **Container (Host)** | Aplicação principal que carrega e integra os micro-frontends | `3000` | [Link do Repositório Container](https://github.com/saarrr-alves/Micro-Frontends-Restaurante) |
| **Cardápio** | Micro-frontend responsável pela exibição e seleção dos pratos | `3001` | [Link do Repositório Cardápio](https://github.com/saarrr-alves/Micro-Frontend-Cardapio) |
| **Pedido** | Micro-frontend responsável pela lista de itens selecionados, quantidades e total | `3002` | [Link do Repositório Pedido](https://github.com/saarrr-alves/Micro-Frontend-Pedidos) |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior;
- npm, yarn ou pnpm.

## Como executar

Baixe individualmente cada repositório pelos respectivos links acima e coloque todos na mesma pasta principal. Cada repositório deve ficar em uma subpasta própria, sem misturar seus arquivos.

### Papel do Container e ordem de inicialização

O **Container** é a aplicação principal (host): ele integra e exibe os micro-frontends de **Cardápio** e **Pedidos**. Como ele depende desses projetos para carregar as funcionalidades, inicie primeiro Cardápio e Pedidos e aguarde que estejam disponíveis nas portas `3001` e `3002`. Só então inicie o Container na porta `3000`. Mantenha os três processos em execução durante o uso. Na lista abaixo, execute os comandos do Cardápio e do Pedido antes dos comandos do Container.

### Iniciar cada aplicação

Cada aplicação deve ser iniciada em um terminal separado, dentro da pasta que contém o `package.json` correspondente. Mantenha os três processos em execução durante o uso:

#### 1. Micro-frontend Container (Porta 3000)
```bash
git clone https://github.com/saarrr-alves/Micro-Frontends-Restaurante.git
cd container
npm install
npm run dev
```

#### 2. Micro-frontend Cardapio (Porta 3001)
```bash
git clone https://github.com/saarrr-alves/Micro-Frontend-Cardapio.git
cd cardapio
npm install
npm run dev
```

#### 3. Micro-frontend Pedidos (Porta 3002)
```bash
git clone https://github.com/saarrr-alves/Micro-Frontend-Pedidos.git
cd pedido
npm install
npm run dev
```