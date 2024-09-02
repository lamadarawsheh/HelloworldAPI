import express, { Request, Response } from 'express';
import os from 'os';

const app = express();
const port = 3000;
app.use(express.json());

app.set('trust proxy', true);

app.get('/hello', (req: Request, res: Response) => {
    
        const name  = req.query.name as string;
        const greeting = name ? `Hello,  ${name}`: `Hello, World!`;
        res.json({greeting });
  });
  
app.get('/info', (req: Request, res: Response) => {
    
        const request_time  = new Date().toISOString();
        const host_name = os.hostname();
        const client_address = req.ip;
        const headers = req.headers;
        
        res.setHeader ('Content-Type',`application/json`);
        res.send({request_time,client_address,host_name,headers });
  });

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});