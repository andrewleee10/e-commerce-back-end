const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER

    },
    tag_id: {
      type: DataTypes.INTEGER

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag'
  }
)

Product.hasOne(ProductTag, {
  sourceKey: 'id',
  foreignKey: 'product_id',
  onDelete: 'cascade',
  hooks: true
})

Tag.hasOne(ProductTag, {
  sourceKey: 'id',
  foreignKey: 'tag_id',
  onDelete: 'cascade',
  hooks: true
})

module.exports = ProductTag
