const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// rota
const alunosRoutes = require('./routes/route');

app.use(cors());
app.use(express.json());

// rota dos alunos
app.use('/alunos', alunosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});