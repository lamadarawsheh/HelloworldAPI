import express, { Request, Response } from "express";
import os from "os";
import getRealClientIPAddress from "./client";

const app = express();
const port = 3000;

app.get("/hello", (req: Request, res: Response) => {
  const name = req.query.name as string;
  const greeting = name ? `Hello, ${name}` : `Hello, World!`;
  res.json({ greeting });
});

app.get("/info", (req: Request, res: Response) => {
  const request_time = new Date().toISOString();
  const host_name = os.hostname();
  const client_address = getRealClientIPAddress(req);
  const headers = req.headers;
  res.setHeader("content-Type", `application/json`);
  res.json({ request_time, client_address, host_name, headers });
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
server.on("error", (err) => {
  if (err.name === "EADDRINUSE") {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  }
});
export default app;
