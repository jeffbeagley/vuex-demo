const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const dist = path.join(__dirname, 'src')
const cors = require('cors')
const http = require('http').Server(app)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
	res.sendFile(path.join(dist, 'index.html'))
})

app.use('/', express.static(dist))

const port = process.env.PORT || 8081

http.listen(port, function() {
	console.log('started and is accessible via http://localhost:%s', port)
})

process.on('SIGINT', () => {
	console.log('Bye bye!')
	process.exit()
})
