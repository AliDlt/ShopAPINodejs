const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Create a new product with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               imageURL:
 *                 type: string
 *     responses:
 *       '201':
 *         description: New product created successfully
 *       '400':
 *         description: Bad request - Invalid data
 *       '500':
 *         description: Internal server error
 */

router.post('/products', productController.createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       '200':
 *         description: A list of products
 *       '500':
 *         description: Internal server error
 */

router.get('/products', productController.getAllProducts);

/**
 * @swagger
 * /products/{productId}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Retrieve a single product by its unique ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The requested product
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */

router.get('/products/:productId', productController.getProductById);

/**
 * @swagger
 * /products/{productId}:
 *   put:
 *     summary: Update a product by ID
 *     description: Update an existing product by its unique ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *               imageURL:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Updated product
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */

router.put('/products/:productId', productController.updateProduct);

/**
 * @swagger
 * /products/{productId}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Delete an existing product by its unique ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted product
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */

router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
