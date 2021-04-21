var { Router } = require("express");
const router = Router();
var User = require("../models/user");

router.put("/api/user/:id", (req, res) => {
  User.findById(req.params.id, function (error, user) {
    if (!user) {
      res.json({ message: "Usuário inexistente" });
      return;
    }
    if (error) res.send(error);
    user.nmUsuario = req.body.nmUsuario || user.nmUsuario;
    user.nmSobrenome = req.body.nmSobrenome || user.nmSobrenome;
    user.deEmail = req.body.deEmail || user.deEmail;
    user.nuIdade = req.body.nuIdade || user.nuIdade;
    user.dtCadastro = req.body.dtCadastro || user.dtCadastro;
    user.posicaofavorita = req.body.posicaofavorita || user.posicaofavorita;
    user.peFavorito = req.body.peFavorito || user.peFavorito;

    user.save((error) => {
      if (error) res.send(error);
      res.json({ message: "Usuário atualizado com sucesso" });
    });
  });
});

module.exports = router;
