import express from 'express'
import cors from 'cors'

const origin = process.env.ORIGIN || 'http://localhost:9000'

export default app => {
	app.set('trust proxy', 1)

	app.use(
		cors({
			credentials: true,
			origin
		})
	)
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
}
