const express = require('express')
const app = express()
const logger = require('./logger')
// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  logger.debug(`server started on port ${PORT}`)
})
