import app from './app.js'

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
	console.log('Server started on port: ', PORT)
})
