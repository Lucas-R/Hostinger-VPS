import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Olá, mundo com TypeScript e Express!');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));