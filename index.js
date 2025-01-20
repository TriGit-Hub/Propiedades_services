const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Propiedad, Propietario, Empleado, Evento, Movimiento } = require('./models'); // Asegúrate de que estos modelos estén definidos y exportados correctamente

const app = express();

// Middleware global
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://agro-cornejo.site', // Cambia por la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Crear el router con prefijo `/api`
const router = express.Router();

// CRUD para Propiedades
router.get('/propiedades', async (req, res) => {
  const propiedades = await Propiedad.findAll();
  res.json(propiedades);
});

router.get('/propiedades/:id', async (req, res) => {
  const propiedad = await Propiedad.findByPk(req.params.id);
  if (propiedad) {
    res.json(propiedad);
  } else {
    res.status(404).send('Propiedad no encontrada');
  }
});

router.post('/propiedades', async (req, res) => {
  const nuevaPropiedad = await Propiedad.create(req.body);
  res.status(201).json(nuevaPropiedad);
});

router.put('/propiedades/:id', async (req, res) => {
  const propiedad = await Propiedad.findByPk(req.params.id);
  if (propiedad) {
    await propiedad.update(req.body);
    res.json(propiedad);
  } else {
    res.status(404).send('Propiedad no encontrada');
  }
});

router.delete('/propiedades/:id', async (req, res) => {
  const propiedad = await Propiedad.findByPk(req.params.id);
  if (propiedad) {
    await propiedad.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Propiedad no encontrada');
  }
});

// CRUD para Propietarios
router.get('/propietarios', async (req, res) => {
  const propietarios = await Propietario.findAll();
  res.json(propietarios);
});

router.get('/propietarios/:id', async (req, res) => {
  const propietario = await Propietario.findByPk(req.params.id);
  if (propietario) {
    res.json(propietario);
  } else {
    res.status(404).send('Propietario no encontrado');
  }
});

router.post('/propietarios', async (req, res) => {
  const nuevoPropietario = await Propietario.create(req.body);
  res.status(201).json(nuevoPropietario);
});

router.put('/propietarios/:id', async (req, res) => {
  const propietario = await Propietario.findByPk(req.params.id);
  if (propietario) {
    await propietario.update(req.body);
    res.json(propietario);
  } else {
    res.status(404).send('Propietario no encontrado');
  }
});

router.delete('/propietarios/:id', async (req, res) => {
  const propietario = await Propietario.findByPk(req.params.id);
  if (propietario) {
    await propietario.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Propietario no encontrado');
  }
});

// CRUD para Empleados
router.get('/empleados', async (req, res) => {
  const empleados = await Empleado.findAll();
  res.json(empleados);
});

router.get('/empleados/:id', async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    res.json(empleado);
  } else {
    res.status(404).send('Empleado no encontrado');
  }
});

router.post('/empleados', async (req, res) => {
  const nuevoEmpleado = await Empleado.create(req.body);
  res.status(201).json(nuevoEmpleado);
});

router.put('/empleados/:id', async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    await empleado.update(req.body);
    res.json(empleado);
  } else {
    res.status(404).send('Empleado no encontrado');
  }
});

router.delete('/empleados/:id', async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    await empleado.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Empleado no encontrado');
  }
});

// CRUD para Eventos
router.get('/eventos', async (req, res) => {
  const eventos = await Evento.findAll();
  res.json(eventos);
});

router.get('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    res.json(evento);
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

router.post('/eventos', async (req, res) => {
  const nuevoEvento = await Evento.create(req.body);
  res.status(201).json(nuevoEvento);
});

router.put('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.update(req.body);
    res.json(evento);
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

router.delete('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

// CRUD para Movimientos
router.get('/movimientos', async (req, res) => {
  const movimientos = await Movimiento.findAll();
  res.json(movimientos);
});

router.get('/movimientos/:id', async (req, res) => {
  const movimiento = await Movimiento.findByPk(req.params.id);
  if (movimiento) {
    res.json(movimiento);
  } else {
    res.status(404).send('Movimiento no encontrado');
  }
});

router.post('/movimientos', async (req, res) => {
  const nuevoMovimiento = await Movimiento.create(req.body);
  res.status(201).json(nuevoMovimiento);
});

router.put('/movimientos/:id', async (req, res) => {
  const movimiento = await Movimiento.findByPk(req.params.id);
  if (movimiento) {
    await movimiento.update(req.body);
    res.json(movimiento);
  } else {
    res.status(404).send('Movimiento no encontrado');
  }
});

router.delete('/movimientos/:id', async (req, res) => {
  const movimiento = await Movimiento.findByPk(req.params.id);
  if (movimiento) {
    await movimiento.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Movimiento no encontrado');
  }
});

// Usar el prefijo `/api` para todas las rutas
app.use('/api', router);

// Middleware para manejo global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ocurrió un error en el servidor.' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
