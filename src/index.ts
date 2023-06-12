import express from 'express';
import { Request, Response } from 'express';
import Person from '@/Person';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(new Person().sayHello());
});

app.listen(3030, () => {
  console.log('listening on Port 3030');
});
