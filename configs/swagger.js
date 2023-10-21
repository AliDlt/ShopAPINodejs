const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'SHOP API',
        version: '1.0.0',
        description: 'API documentation for the SHOP API',
      },
    },
    apis: ['./src/routes/*.js'],
  };

const specs = swaggerJsdoc(options);

module.exports = specs;
