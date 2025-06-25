const express = require('express');
const router = express.Router();

const alunos = [
    { id: "1", nome: "Ana Silva", ira: 2.5, curso: "Engenharia de Software" },
    { id: "2", nome: "Bruno Souza", ira: 3.5, curso: "Sistemas de Informação" },
    { id: "3", nome: "Carlos Lima", ira: 6.5, curso: "Ciência da Computação" },
    { id: "4", nome: "Daniela Costa", ira: 9.5, curso: "Engenharia de Computação" },
    { id: "5", nome : "Augusto Moreira", ira: 8.7, curso: "Redes de Computadores"}
];

router.get('/', (req, res) => {
    res.json(alunos);
});

router.post("/", (req,res) =>{
    const novoAluno = req.body;
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        alunos[index] = { ...req.body, id }; // mantém o id original
        res.json(alunos[index]);
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        const removido = alunos.splice(index, 1);
        res.json(removido[0]);
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

// ...existing code...

module.exports = router;
