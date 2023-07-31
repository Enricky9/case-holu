# Calculadora Solar

Uma aplicação React que permite calcular e visualizar sistemas solares fotovoltaicos para consumidores residenciais (B2C). A aplicação utiliza o Firebase como backend e base de dados para persistir os dados dos cálculos realizados.

## Funcionalidades

- Dimensionamento de sistemas solares: Insira a potência total do sistema solar em kilo Watts (kW) e obtenha a quantidade de painéis, inversores, potência do painel utilizado, comprimento de estrutura necessário e área útil necessária para a instalação no telhado.

- Visualização dos resultados: Após realizar o cálculo, a aplicação exibirá os resultados dos dimensionamentos realizados para cada sistema solar.

## Tecnologias utilizadas

- React: Framework JavaScript para a construção da interface do usuário.
- Firebase: Plataforma de desenvolvimento de aplicativos web que fornece serviços de backend como autenticação, banco de dados e hospedagem.

## Configuração do Firebase

Antes de executar a aplicação localmente, é necessário configurar um projeto no Firebase e obter as credenciais de configuração. Siga os passos abaixo:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. No painel do projeto, clique em "Adicionar app" e escolha a opção "Web".
3. Copie as credenciais de configuração fornecidas pelo Firebase e substitua os campos no arquivo `src/firebase.js` do projeto.

## Instalação e Execução

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local: git clone (https://github.com/Enricky9/case-holu/tree/main/Case-2).

2. Instale as dependências do projeto: npm install

4. Inicie a aplicação: npm start


A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura de arquivos e pastas do projeto é organizada da seguinte forma:

- `public`: Contém os arquivos estáticos da aplicação.
- `src`: Contém os arquivos da aplicação React.
  - `components`: Contém os componentes React da aplicação.
  - `firebase.js`: Configuração do Firebase.
  - `App.js`: Arquivo principal da aplicação React.













