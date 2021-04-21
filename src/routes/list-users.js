var { Router } = require("express");
const router = Router();
var User = require("../models/user");

//Acesso GET /api/users
router.get("/api/list-users", (req, res) => {
  User.find(
    function (error, users) {
      if (error) res.send(error);
      res.json(users);
    },
    { limit: 10 }
  );
});

module.exports = router;
