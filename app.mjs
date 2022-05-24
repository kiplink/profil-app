import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const port = 8000
const host = '0.0.0.0'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/' + 'index.html'))
  //__dirname : It will resolve to your project folder.
})

app.listen(port, host)
console.debug('Server listening on port ' + port)
