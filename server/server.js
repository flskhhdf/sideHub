const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);

app.use(cors({credentials:true, origin: ["http://localhost:3000"]}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello server!");
})

server.listen(port, () => {
    console.log(`running server at http://localhost:${port}`);
})

