// import models
const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'uid' })
// Categories have many Products
Category.hasMany(Product, { foreignKey: 'uid' })
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Tag, { foreignKey: 'uid' })
// Tags belongToMany Products (through ProductTag)
ProductTag.hasMany(Product, { foreignKey: 'uid' })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
}
