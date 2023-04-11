const Products = require('./products.models')

const initModels = () => {

    Products.belongsTo(Products)
}

module.exports = initModels