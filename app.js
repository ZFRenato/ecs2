const express = require('express');

const app = express();
app.use(express.json())

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'healthy teste2 EMAIL', 
    version: '1.0.0',
  });
});

app.get('/teste', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'healthy teste3 EMAIL', 
    version: '1.0.0',
  });
});


app.post('/teste/email', (req, res) => {
  const { email, senha } = req.body
  if (!email || !senha) {
    res.status(400)
  }
  res.status(200).json({
    success: true,
    message: "email"
  })
})

app.listen(port);
console.log(`Aplicação executando na porta.. [Email]: ${port}`);

