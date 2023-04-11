const router = require('express').Router()

const productServices = require('./products.services')

router.route('/products')
    .get(productServices.getAllProducts)
    .post(productServices.postNewProduct)

router.route('/products/:id')
    .get(productServices.getProductById)
    .patch(productServices.patchProduct)
    .delete(productServices.deletedProduct)

module.exports = router