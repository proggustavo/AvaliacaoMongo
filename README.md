# **_Projeto Mongo_**

Esse é um simples projeto utilizando mongodb. O deploy deste projeto está disponível através do link https://mongoaul2.herokuapp.com/api .

## Testando a aplicação

**Opção 1 - Docker**:

Você pode testar utilizando o docker e fazendo o build através do DockerFile que está nesse projeto.

Caso não tenha docker instalado, você pode instalar através do link https://www.docker.com/get-started.

Após a instalação, basta executar os comandos a seguir na pasta do projeto.

```
$ docker build -t projetomongo .

$ docker run -p 8080:8080 projetomongo
```

Após isso a aplicação estará disponível no endereço http://localhost:8080/api/

**Opção 2 - Máquina local**:

Você pode testar diretamente em sua máquina, para isso é necessário ter o [NODE](https://nodejs.org/en/) instalado.

Depois basta rodar os seguintes comandos na pasta do projeto.

```
$ npm install

$ npm start
```

Após isso a aplicação estará disponível no endereço http://localhost:8080/api/

**Opção 3 - Teste Heroku**:

Você pode testar através do deploy da aplicação disponível na Heroku.

Depois basta rodar os seguintes comandos na pasta do projeto. Através do link https://mongoaul2.herokuapp.com/api.

Na raiz do projeto você pode encontrar exemplos de requisições que você pode importar e utilizar no insomnia ou postman.

<!-- prettier-ignore -->
## Endpoins disponíveis

| Method   | URL                  | Body                                                                                 | Response                                                                     | Obs                                              |
| -------- | -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| `GET`    | `/api/show-user/:id` | N/A                                                                                  | `{ id, nmUsuario, nmSobrenome, deEmail, nmSenha, cdUsuario, dtCadastro, }`   | Consulta as informações do usuário especificado. |
| `GET`    | `/api/list-user`     | N/A                                                                                  | `[{ id, nmUsuario, nmSobrenome, deEmail, nmSenha, cdUsuario, dtCadastro, }]` | Retorna informações de todos os usuários.        |
| `PUT`    | `/api/user/:id`      | `{ nmUsuario, nmSobrenome, deEmail, nmSenha, nuIdade, posicaofavorita, peFavorito }` | N/A                                                                          | Atualiza um usuário.                             |
| `DELETE` | `/api/user/:id`      | N/A                                                                                  | N/A                                                                          | Exclui um usuário.                               |
| `POST`   | `/api/user`          | `{ nmUsuario, nmSobrenome, deEmail, nmSenha, nuIdade, posicaofavorita, peFavorito }` | N/A                                                                          | Cria um usuário.                                 |
