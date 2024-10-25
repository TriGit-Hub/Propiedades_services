module.exports = (sequelize, DataTypes) => {
    const Propiedad = sequelize.define('Propiedad', {
      address: DataTypes.STRING,
      description: DataTypes.TEXT,
      location: DataTypes.STRING,
      area_m2: DataTypes.FLOAT,
      area_varas: DataTypes.FLOAT,
      value: DataTypes.FLOAT,
      registration_number: DataTypes.STRING,
      status: DataTypes.STRING,
      deed: DataTypes.STRING
    }, {
      freezeTableName: true // Evita que sequelize pluralice el nombre de la tabla
    });
    return Propiedad;
  };
  