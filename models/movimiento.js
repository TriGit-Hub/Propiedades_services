module.exports = (sequelize, DataTypes) => {
    const Movimiento = sequelize.define('Movimiento', {
      value: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
      freezeTableName: true
    });
  
    // Relación con la tabla de Propiedad (One-to-Many)
    Movimiento.associate = (models) => {
      Movimiento.belongsTo(models.Propiedad, {
        foreignKey: 'propiedadId',
        as: 'propiedad'
      });
    };
  
    return Movimiento;
  };
  