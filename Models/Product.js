const db = require("../Config/db");
const { DataTypes } = require("sequelize");

const Product = db.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ProductName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ProductPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: true,
});
module.exports = Product;
