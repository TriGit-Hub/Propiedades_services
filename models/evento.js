module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      photos: {
        type: DataTypes.STRING, // Almacena rutas de fotos o puedes usar otra estructura para manejar múltiples fotos
        allowNull: true
      }
    }, {
      freezeTableName: true
    });
  
    // Relación con la tabla de Propiedad (One-to-Many)
    Evento.associate = (models) => {
      Evento.belongsTo(models.Propiedad, {
        foreignKey: 'propiedadId',
        as: 'propiedad'
      });
    };
  
    return Evento;
  };
  