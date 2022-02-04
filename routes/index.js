var express = require('express');
var router = express.Router();


let info = {
  nome: 'Curso Café Expresso',
  cursos: ['full stack', 'mobile android', 'marketing digital']
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', info);
});

module.exports = router;
