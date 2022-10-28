const express = require('express')
const app = express()
const port = process.env.PORT||5000
const cors = require('cors')
const items = require('./data/contents.json');

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/all-items',(req, res) =>{
  res.send(items)
})
app.get('/items/:id',(req, res) =>{
  const id = req.params.id;
  const selectedData = items.find(i=>i.id===id);
  res.send(selectedData)
})
app.get('/checkout/:id',(req, res) =>{
  const id = req.params.id;
  const selectedData = items.find(i=>i.id===id);
  res.send(selectedData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})