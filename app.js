'use strict'
const express = require('express')
const app = express()

const port = 8000
const host = '0.0.0.0'

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/express/index.html')
  //__dirname : It will resolve to your project folder.
})

app.listen(port, host)
console.debug('Server listening on port ' + port)
