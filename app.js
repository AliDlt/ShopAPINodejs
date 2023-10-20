const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))