'use strict'
const http = require('http')
const express = require('express')
const app = express()

app.use(express.static('public')) // default URL for website
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/express/index.html')
  //__dirname : It will resolve to your project folder.
})

const port = 8000
const host = '0.0.0.0'
app.listen(port, host)
console.debug('Server listening on port ' + port)
