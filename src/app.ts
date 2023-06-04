import express from 'express';
import {Request, Response} from 'express';

const app = express();
app.use(express.json());
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('API de retorno');
});

app.post('/', (req: Request, res: Response) => {
    console.log(req.body.cliente);
    res.status(200).json({ message: 'Requisição POST recebida' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});