import { Router } from 'express'
import { upload } from '../config/multer.config.js'
import fs from 'fs'
import { parseString } from 'xml2js'
import cleanData from '../helpers/CleanData.js'

const api = Router()

api.get('/', (req, res) => {
	res.json({ message: 'Hello World!' })
})

api.post('/upload', upload.single('file'), async (req, res) => {
	const xmlString = fs.readFileSync(`temp/${req.file.originalname}`, 'utf-8')

	parseString(xmlString, (err, result) => {
		if (err) return console.error(err)

		const data = cleanData(result)

		res.json(data)
		console.log(`Finished extracting data from ${req.file.originalname}`)
	})

	fs.rmSync(`temp/${req.file.originalname}`)
})

export default api
