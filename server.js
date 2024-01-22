const express = require('express');
const app = express();

app.get("/log-gps", (req, res) => {
  // GPS情報の取得は同じ
  res.send("Logged GPS");
});

app.listen(3000);