module.exports = (sequelize, DataTypes) => {
    const Empleado = sequelize.define('Empleado', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salary: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      hire_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      freezeTableName: true
    });
  
    // Relación con la tabla de Propiedad (One-to-Many)
    Empleado.associate = (models) => {
      Empleado.belongsTo(models.Propiedad, {
        foreignKey: 'propiedadId',
        as: 'propiedad'
      });
    };
  
    return Empleado;
  };
  