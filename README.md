
# EBANX Take-home Assignment

Este projeto é uma implementação simples de uma API com dois endpoints (`GET /balance` e `POST /event`), conforme especificado no desafio técnico da EBANX. 

## Estrutura do Projeto

A estrutura do projeto foi organizada da seguinte forma:

```
ebanx-assignment/
├── src/
│   ├── controllers/
│   │   ├── balanceController.js
│   │   └── eventController.js
│   ├── services/
│   │   └── eventService.js
│   ├── routes/
│   │   └── index.js
│   ├── app.js
│   └── server.js
├── test/
│   ├── balance.test.js
│   └── event.test.js
├── .gitignore
├── package.json
└── README.md
```

### Descrição dos Diretórios e Arquivos

- **`src/`**: Diretório principal do código fonte.
  - **`controllers/`**: Contém os controladores que lidam com as requisições HTTP.
    - `balanceController.js`: Controlador para o endpoint `GET /balance`.
    - `eventController.js`: Controlador para o endpoint `POST /event`.
  - **`services/`**: Contém a lógica de negócios.
    - `eventService.js`: Serviço que processa eventos.
  - **`routes/`**: Define as rotas da API e mapeia para os controladores.
    - `index.js`: Arquivo de roteamento principal.
  - **`app.js`**: Configura o aplicativo Express e importa as rotas.
  - **`server.js`**: Inicializa o servidor e escuta na porta especificada.
- **`test/`**: Contém os testes unitários e de integração.
  - `balance.test.js`: Testes para o endpoint `GET /balance`.
  - `event.test.js`: Testes para o endpoint `POST /event`.
- **`.gitignore`**: Define quais arquivos e diretórios devem ser ignorados pelo Git.
- **`package.json`**: Arquivo de configuração do npm que lista as dependências e scripts do projeto.
- **`README.md`**: Documentação do projeto.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado (recomenda-se a versão LTS)
- npm (gerenciador de pacotes do Node.js)

### Passos para Executar

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/emernuness/api-test-ebanx.git
   cd ebanx-assignment
   ```

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Iniciar o servidor:**

   ```bash
   npm start
   ```

   O servidor irá rodar na porta 3000 por padrão. Você pode acessar os endpoints em `http://localhost:3000/balance` e `http://localhost:3000/event`.

4. **Rodar os testes:**

   ```bash
   npm test
   ```

   Isso executará os testes definidos em `test/balance.test.js` e `test/event.test.js`.

## Endpoints da API

### GET /balance

- **Descrição**: Retorna o saldo atual.
- **Resposta**:
  ```json
  {
    "balance": 100
  }
  ```

### POST /event

- **Descrição**: Cria um novo evento.
- **Corpo da Requisição**:
  ```json
  {
    "type": "credit",
    "amount": 50
  }
  ```
- **Resposta**:
  ```json
  {
    "type": "credit",
    "amount": 50
  }
  ```

## Explicação das Decisões de Design

### Estrutura Modular

A estrutura modular separa as responsabilidades do código, facilitando a manutenção e escalabilidade do projeto:

- **Controladores**: Lidam com as requisições HTTP e chamam os serviços necessários.
- **Serviços**: Contêm a lógica de negócios e podem ser facilmente testados e reutilizados.
- **Rotas**: Definem os endpoints da API e mapeiam para os controladores.

### Testes Automatizados

Utilizei Jest e Supertest para garantir que os endpoints funcionem conforme esperado. Isso ajuda a prevenir regressões e mantém a qualidade do código.

### Simplicidade

Mantive o código simples e objetivo, atendendo aos requisitos sem adicionar complexidade desnecessária.

### Sem Persistência

Seguindo as instruções, não utilizei banco de dados ou qualquer mecanismo de persistência, mantendo tudo em memória para simplicidade.


