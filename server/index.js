import Nuxt from 'nuxt'
import express from 'express'
import useragent from 'express-useragent'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use(useragent.express())

// Import API Routes
app.use('/api', api)

// Start nuxt.js
async function start () {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (config.dev) {
    nuxt.build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  }

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
