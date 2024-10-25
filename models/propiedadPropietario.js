module.exports = (sequelize, DataTypes) => {
    const PropiedadPropietario = sequelize.define('PropiedadPropietario', {
      propiedadId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Propiedad',
          key: 'id'
        }
      },
      propietarioId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Propietario',
          key: 'id'
        }
      }
    }, {
      freezeTableName: true
    });
  
    return PropiedadPropietario;
  };
  