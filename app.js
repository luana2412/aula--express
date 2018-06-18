const express = require('express');
const rotascursos = require('./rotas/cursos.js');
const rotasalunos = require('./rotas/alunos.js');


 const app = express();

app.use('/cursos',rotascursos)
app.use('/alunos',rotasalunos)


app.listen(3000, function() {
    console.log('App de Exemplo escutando na porta 3000!');
});


