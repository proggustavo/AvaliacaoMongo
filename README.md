# Projeto Mongo

Esse é um simples projeto utilizando mongodb. O deploy deste projeto está disponível através do link https://mongoaula.herokuapp.com:3000/ .

## Rodando Localmente

O deploy deste projeto foi feito utilizando docker, você pode testar localmente utilizando o DockerFile que está nesse projeto.

Caso não tenha docker instalado, você pode instalar através do link https://www.docker.com/get-started.

Após a instalação, basta executar os comandos a seguir na pasta do projeto.

<!-- prettier-ignore -->
## Endpoins disponíveis

| Method   | URL                  | Body                                                                                 | Response                                                                    | Obs                                              |
| -------- | -------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------ |
| `GET`    | `/api/show-user/:id` | N/A                                                                                  | `{ _id, nmUsuario, nmSobrenome, deEmail, nmSenha, cdUsuario, dtCadastro, }` | Consulta as informações do usuário especificado. |
| `GET`    | `/api/list-user`     | N/A                                                                                  | `{id, cidade, estado}`                                                      | Retorna informações de todos os usuários.        |
| `PUT`    | `/api/user/:id`      | `{ nmUsuario, nmSobrenome, deEmail, nmSenha, nuIdade, posicaofavorita, peFavorito }` | N/A                                                                         | Atualiza um usuário.                             |
| `DELETE` | `/api/user/:id`      | N/A                                                                                  | N/A                                                                         | Exclui um usuário.                               |
| `POST`   | `/api/user`          | `{ nmUsuario, nmSobrenome, deEmail, nmSenha, nuIdade, posicaofavorita, peFavorito }` | N/A                                                                         | Cria um usuário.                                 |
