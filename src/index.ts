import express, { Request, Response } from 'express';
import os from 'os';

const app = express();
const port = 3000;
app.use(express.json());


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});