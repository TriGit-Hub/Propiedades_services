'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Propiedad', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      area_m2: {
        type: Sequelize.FLOAT
      },
      area_varas: {
        type: Sequelize.FLOAT
      },
      value: {
        type: Sequelize.FLOAT
      },
      registration_number: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      deed: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Propiedad');
  }
};
