module.exports = (sequelize, DataTypes) => {
  const Propietario = sequelize.define('Propietario', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  // Relación con la tabla de Propiedad (Many-to-Many)
  Propietario.associate = (models) => {
    Propietario.belongsToMany(models.Propiedad, { through: 'PropiedadPropietario' });
  };

  return Propietario;
};
