const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  let payload = {
    msg: "Hello World"
  }
  
  res.send(payload)
})

app.listen(5000, () => {
  console.log("Server Started..")
})