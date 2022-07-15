const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).send("Startse - Tech Academy - Módulo XI - Banco de Dados");
});

module.exports = router;
