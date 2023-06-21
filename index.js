const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main.html'); 

 
  })
  
app.get('/diary', (req, res) => {
    res.sendFile(__dirname + '/diary.html');
  });
  app.get('/cal', (req, res) => {
    res.sendFile(__dirname + '/cal.html');
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})