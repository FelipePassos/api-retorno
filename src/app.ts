import express from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
  res.send('API de retorno');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});