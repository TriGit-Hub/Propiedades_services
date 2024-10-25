const express = require('express');
const bodyParser = require('body-parser');
const { Propiedad, Propietario, Empleado, Evento, Movimiento } = require('./models'); // Asegúrate de que estos modelos estén definidos y exportados correctamente
const cors = require('cors');'d'
const app = express();
const propertyRoutes = require('./routes/propertyRoutes');
app.use(bodyParser.json());

// CRUD para Propiedades
app.get('/propiedades', async (req, res) => {
  const propiedades = await Propiedad.findAll();
  res.json(propiedades);
});

app.get('/propiedades/:id', async (req, res) => {
  const propiedad = await Propiedad.findByPk(req.params.id);
  if (propiedad) {
    res.json(propiedad);
  } else {
    res.status(404).send('Propiedad no encontrada');
  }
});

app.post('/propiedades', async (req, res) => {
  const nuevaPropiedad = await Propiedad.create(req.body);
  res.status(201).json(nuevaPropiedad);
});

app.put('/propiedades/:id', async (req, res) => {
  const propiedad = await Propiedad.findByPk(req.params.id);
  if (propiedad) {
    await propiedad.update(req.body);
    res.json(propiedad);
  } else {
    res.status(404).send('Propiedad no encontrada');
  }
});

app.delete('/propiedades/:id', async (req, res) => {
  const propiedad = await Propiedad.findByPk(req.params.id);
  if (propiedad) {
    await propiedad.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Propiedad no encontrada');
  }
});

// CRUD para Propietarios
app.get('/propietarios', async (req, res) => {
  const propietarios = await Propietario.findAll();
  res.json(propietarios);
});

app.get('/propietarios/:id', async (req, res) => {
  const propietario = await Propietario.findByPk(req.params.id);
  if (propietario) {
    res.json(propietario);
  } else {
    res.status(404).send('Propietario no encontrado');
  }
});

app.post('/propietarios', async (req, res) => {
  const nuevoPropietario = await Propietario.create(req.body);
  res.status(201).json(nuevoPropietario);
});

app.put('/propietarios/:id', async (req, res) => {
  const propietario = await Propietario.findByPk(req.params.id);
  if (propietario) {
    await propietario.update(req.body);
    res.json(propietario);
  } else {
    res.status(404).send('Propietario no encontrado');
  }
});

app.delete('/propietarios/:id', async (req, res) => {
  const propietario = await Propietario.findByPk(req.params.id);
  if (propietario) {
    await propietario.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Propietario no encontrado');
  }
});

// CRUD para Empleados
app.get('/empleados', async (req, res) => {
  const empleados = await Empleado.findAll();
  res.json(empleados);
});

app.get('/empleados/:id', async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    res.json(empleado);
  } else {
    res.status(404).send('Empleado no encontrado');
  }
});

app.post('/empleados', async (req, res) => {
  const nuevoEmpleado = await Empleado.create(req.body);
  res.status(201).json(nuevoEmpleado);
});

app.put('/empleados/:id', async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    await empleado.update(req.body);
    res.json(empleado);
  } else {
    res.status(404).send('Empleado no encontrado');
  }
});

app.delete('/empleados/:id', async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    await empleado.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Empleado no encontrado');
  }
});

// CRUD para Eventos
app.get('/eventos', async (req, res) => {
  const eventos = await Evento.findAll();
  res.json(eventos);
});

app.get('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    res.json(evento);
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

app.post('/eventos', async (req, res) => {
  const nuevoEvento = await Evento.create(req.body);
  res.status(201).json(nuevoEvento);
});

app.put('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.update(req.body);
    res.json(evento);
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

app.delete('/eventos/:id', async (req, res) => {
  const evento = await Evento.findByPk(req.params.id);
  if (evento) {
    await evento.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Evento no encontrado');
  }
});

// CRUD para Movimientos
app.get('/movimientos', async (req, res) => {
  const movimientos = await Movimiento.findAll();
  res.json(movimientos);
});

app.get('/movimientos/:id', async (req, res) => {
  const movimiento = await Movimiento.findByPk(req.params.id);
  if (movimiento) {
    res.json(movimiento);
  } else {
    res.status(404).send('Movimiento no encontrado');
  }
});

app.post('/movimientos', async (req, res) => {
  const nuevoMovimiento = await Movimiento.create(req.body);
  res.status(201).json(nuevoMovimiento);
});

app.put('/movimientos/:id', async (req, res) => {
  const movimiento = await Movimiento.findByPk(req.params.id);
  if (movimiento) {
    await movimiento.update(req.body);
    res.json(movimiento);
  } else {
    res.status(404).send('Movimiento no encontrado');
  }
});

app.delete('/movimientos/:id', async (req, res) => {
  const movimiento = await Movimiento.findByPk(req.params.id);
  if (movimiento) {
    await movimiento.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Movimiento no encontrado');
  }
});

app.use(cors());
// Middleware para manejar datos JSON
app.use(express.json());

// Usar las rutas de propiedades
app.use('/propiedades', propertyRoutes);
// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
