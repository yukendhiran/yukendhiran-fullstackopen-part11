const express = require('express')
const app = express()
const logger = require('./logger')
// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  logger.debug(`server started on port ${PORT}`)
})
