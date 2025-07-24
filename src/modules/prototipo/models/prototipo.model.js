const { DataTypes } = require("sequelize");
const { sequelize } = require('../../../../database/config/configDB');

const Prototipo = sequelize.define(
    "Prototipo",
   {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expositor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "expositor",
            key: "id"
        }
    }
   },
   {
    tableName: "prototipo",
    createdAt: "criado_em",
    updatedAt: "atualizado_em"
   }
)

module.exports = Prototipo