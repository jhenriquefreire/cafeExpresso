var express = require('express');
const contato = require('../controllers/contatoController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', contato.index)

module.exports = router;
