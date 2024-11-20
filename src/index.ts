
import express, { Request, Response, Express } from "express";
import appRouter from "./routes";
import path from "path";

const app: Express = express();
const port = 3005;

app.set('view engine', 'pug');

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('OK');
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.use('/', appRouter);

app.listen(port, () => { console.log(`Server started at http://localhost:${port}`) });