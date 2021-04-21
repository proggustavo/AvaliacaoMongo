var { Router } = require("express");
const router = Router();
const User = require("../models/user");

router.delete("/api/user/:id", (req, res) => {
  User.remove(
    {
      _id: req.params.id,
    },
    function (error) {
      if (error) res.send(error);
      res.json({ message: "Usuário excluído com sucesso!" });
    }
  );
});
module.exports = router;
