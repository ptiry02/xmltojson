import {} from 'dotenv/config'
import express from 'express'
import appConfig from './config/index.config.js'
import api from './routes/index.routes.js'

const app = express()

appConfig(app)

app.use('/', api)

export default app
