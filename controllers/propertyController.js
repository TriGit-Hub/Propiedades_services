const { Propiedad, Movimiento, Evento } = require('../models');

// Crear un movimiento asociado a una propiedad
exports.createMovement = async (req, res) => {
    try {
        const { id } = req.params; // ID de la propiedad
        const { value, date, description } = req.body;

        const propiedad = await Propiedad.findByPk(id);
        if (!propiedad) {
            return res.status(404).json({ message: 'Propiedad no encontrada' });
        }

        const movimiento = await Movimiento.create({
            value,
            date,
            description,
            propiedadId: id, // Relaciona el movimiento con la propiedad
        });

        res.status(201).json(movimiento);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear movimiento', error });
    }
};

// Crear un evento asociado a una propiedad
exports.createEvent = async (req, res) => {
    try {
        const { id } = req.params; // ID de la propiedad
        const { date, description, photos } = req.body;

        const propiedad = await Propiedad.findByPk(id);
        if (!propiedad) {
            return res.status(404).json({ message: 'Propiedad no encontrada' });
        }

        const evento = await Evento.create({
            date,
            description,
            photos,
            propiedadId: id, // Relaciona el evento con la propiedad
        });

        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear evento', error });
    }
};
