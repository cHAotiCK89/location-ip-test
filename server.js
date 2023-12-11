const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json()); 

// CORS設定を有効化
app.use(cors());

app.post('/', (req, res) => {

  // デバイス情報オブジェクトを受信 
  const deviceInfo = req.body;

  // 情報をコンソールに出力
  console.log('device info');
  console.log(`OS: ${deviceInfo.os}`);
  console.log(`browser: ${deviceInfo.browser}`);
  console.log(`screen size: ${deviceInfo.screen}`);
  console.log(`lang: ${deviceInfo.language}`);
  console.log(`location: ${deviceInfo.latitude}, ${deviceInfo.longitude}`);
  console.log(`model: ${deviceInfo.model}`); 
  console.log(`phone number: ${deviceInfo.phone}`);

  // IPアドレス
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`IPアドレス: ${ipAddress}`);
  
  res.send('デバイス情報を受信しました');
});

app.listen(3000, () => {
  console.log('server run!');
});