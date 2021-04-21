var app = require("express");
const router = app.Router();

var User = require("../models/user");

router.post("/api/user", function (req, res) {
  const {
    nmUsuario,
    nmSobrenome,
    deEmail,
    nmSenha,
    nuIdade,
    posicaofavorita,
    peFavorito,
  } = req.body;

  var user = new User({
    nmUsuario,
    nmSobrenome,
    deEmail,
    nmSenha,
    nuIdade,
    posicaofavorita,
    peFavorito,
  });

  user.dtCadastro = new Date();
  user.save(function (error) {
    if (error) res.send(error);
    res.json({ message: "Cadastrado com sucesso" });
  });
});

module.exports = router;
