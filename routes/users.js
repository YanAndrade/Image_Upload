var express = require('express');
var router = express.Router();

/* GET URL mesagem */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* POST requisição retorna mensagem. */
router.post('/', function (req, res, next) {
  res.send('respond with a resource POST');
});

/* GET URL que retorna nome + valor em string. */
router.get('/json', function (req, res, next) {
  res.json({ name: "Yan" });
});

/* POST que retorna vazio a requisição */
router.post('/json', function (req, res, next) {
  res.json();
});

/* GET acessa os parametros passado via URL. */
router.get('/find/:table/:sys_id', function (req, res, next) {
  console.log("Acessou");
  res.json({
    table: req.params.table,
    sys_id: req.params.sys_id
  });
});

/* POST acessa os parametros passado via URL. */
router.post('/find/:table/:sys_id', function (req, res, next) {
  res.json({
  table: req.params.table,
  sys_id: req.params.sys_id
});
});

module.exports = router;
