export default obj => {
	let data = { ...obj }
	const final = {}

	if (Object.keys(obj).length === 1) {
		data = obj[`${Object.keys(obj)[0]}`]
		console.log('IF statment test')
	}

	for (const elm in data) {
		data[`${elm}`].map(item => {
			for (let elm2 in item) {
				item[`${elm2}`] = item[`${elm2}`][0]
			}
		})

		if (data[`${elm}`].length === 1) {
			final[`${elm}`] = data[`${elm}`][0]
		} else {
			final[`${elm}`] = data[`${elm}`]
		}
	}

	return final
}
