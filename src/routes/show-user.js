var { Router } = require("express");
const router = Router();

var User = require("../models/user");

router.get("/api/show-user/:id", (req, res) => {
  var { id } = req.params;

  User.findById(id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
});

module.exports = router;
