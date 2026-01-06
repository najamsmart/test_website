// api/server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  if (req.body.username === "admin" && req.body.password === "1234")
    res.json({ status: "Success" });
  else
    res.status(401).json({ status: "Error" });
});

app.get('/search', (req, res) => {
  res.json({ result: "Book found" });
});

app.post('/fine', (req, res) => {
  res.json({ fine: req.body.days * 10 });
});

app.listen(3000);
