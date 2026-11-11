 # Micro-frontend

Projeto de estudo e demonstração de uma arquitetura baseada em **micro-frontends**, permitindo dividir uma aplicação web em partes independentes, desenvolvidas e implantadas separadamente.

## Objetivos

- Organizar a aplicação em módulos independentes;
- Facilitar a manutenção e a evolução de cada parte do sistema;
- Permitir o uso de diferentes equipes e ciclos de desenvolvimento;
- Demonstrar a integração entre aplicações frontend.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior;
- npm, yarn ou pnpm.

## Como executar

Baixe individualmente cada repositório pelos respectivos links e coloque todos na mesma pasta principal. Cada repositório deve ficar em uma subpasta própria, sem misturar seus arquivos.

Clone o repositório, instale as dependências e inicie o projeto:

```bash
npm install
npm run dev
```

### Iniciar cada micro

Cada micro frontend deve ser iniciado em um terminal separado, dentro da pasta que contém o `package.json` correspondente:

```bash
cd <pasta-do-micro>
npm install
npm run dev
```

Repita para cada micro e para a aplicação principal (host), se houver. Mantenha todos os processos em execução durante o desenvolvimento. Os nomes das pastas, scripts e portas dependem da configuração do repositório; consulte o `package.json` de cada aplicação e os arquivos `vite.config.*`. Se o projeto usar workspaces, siga também os comandos definidos no `package.json` da raiz.

## Estrutura

Cada micro-frontend deve permanecer o mais independente possível, com responsabilidades bem definidas e uma interface clara para integração com a aplicação principal.

## Comunicação entre os micros

Quando houver uma aplicação principal (host), ela carrega e compõe os micros conforme a configuração do projeto. Consulte o código do host, os pontos de entrada e `vite.config.*` para identificar como os micros são carregados e quais URLs ou portas são esperadas.

Para reduzir o acoplamento, os micros devem trocar informações por contratos explícitos, em vez de depender diretamente da implementação uns dos outros. O host pode passar propriedades ou parâmetros com dados e configuração; os micros podem comunicar ações por eventos ou callbacks. Para estado compartilhado, defina uma interface comum e compartilhe apenas o necessário. Dados persistentes podem ser tratados pela API/backend da aplicação. Ao alterar um contrato, atualize os micros consumidores e teste a integração com todos os processos envolvidos ativos.

## Tecnologias

As tecnologias utilizadas podem ser consultadas nos arquivos de configuração do projeto, como `package.json` e `vite.config.*`.

## Contribuição

1. Crie uma branch para sua alteração;
2. Faça as mudanças e valide o projeto localmente;
3. Envie um pull request descrevendo o que foi alterado.

## Licença

Este projeto é destinado a fins de estudo e demonstração.