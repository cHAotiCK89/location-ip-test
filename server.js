const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.post('/', (req, res) => {

  const deviceInfo = req.body;

  console.log(`[location] : ${deviceInfo.latitude}, ${deviceInfo.longitude}`);  

  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  console.log(`[ipaddress] : ${ipAddress}`);

  res.send('Device information received.');

});

app.listen(3000, () => {
  console.log('Server is running!');
});
