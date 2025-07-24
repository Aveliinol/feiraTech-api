const { DataTypes } = require("sequelize");
const { sequelize } = require('../../../../database/config/configDB');

const Expositor = sequelize.define(
    'Expositor',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        instituicao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
    tableName: "prototipo",
    createdAt: "criado_em",
    updatedAt: "atualizado_em"
    }
)

module.exports = Expositor