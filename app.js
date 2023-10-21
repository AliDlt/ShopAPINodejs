const express = require('express')
const bodyParser = require('body-parser')

const swaggerJsdoc = require('./configs/swagger');
const swaggerUi = require('swagger-ui-express');

const connectDB = require("./configs/db");

const app = express()
const port = 5000

require('dotenv').config();

//* Database connection
connectDB();

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));

// Routes
const productRoutes = require('./src/routes/productRoutes');

app.use('/api', productRoutes);

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))