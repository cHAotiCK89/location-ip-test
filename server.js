const express = require('express');
const app = express();

app.get("/log-gps", (req, res) => {
  const { lat, lng } = req.query; 
  console.log(lat, lng); 
  res.send("Logged GPS");
});

app.listen(3000);