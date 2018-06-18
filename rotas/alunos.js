const express = require('express');
const router = express.Router();
const path = require("path")

router.get('/', function(req, res){
    res.sendFile(path.resolve('views/alunos.html'));
});

router.post('/', function(req, res){
    res.send('Aluno Cadastrado!');
});

router.get('/docentes', function(req ,res){
    res.send('Lista de docente.');
});

module.exports = router;
