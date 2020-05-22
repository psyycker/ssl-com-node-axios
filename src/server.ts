import express from "express";
import https from 'https'
import fs from 'fs';
const app = express();

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
  requestCert: true,
  rejectUnauthorized: false,
  ca: fs.readFileSync('ca.crt'),
};

app.get("/", (req, res) => {
  res.send("Hello World")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})

https.createServer(options, app).listen(8080);
