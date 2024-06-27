const express = require("express");
const proyectoService = require("./proyecto.service");

const router = express.Router();

router.get("/api/proyecto", async (req, res) => {
  try {
    const params = JSON.parse(req.headers['params']);
    const paginated = await proyectoService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/api/proyecto/:id", async (req, res) => {
  try {
    const proyectoId = req.params.id;
    const proyecto = await proyectoService.findOneById(proyectoId);
    return res.status(200).send(proyecto);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.post("/api/proyecto", async (req, res) => {
  try {
    const nuevoProyecto = req.body;
    const proyecto = await proyectoService.save(nuevoProyecto);
    return res.status(201).send(proyecto);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/api/proyecto/:id", async (req, res) => {
  try {
    const proyectoId = req.params.id;
    const proyectoActualizado = req.body;
    const proyecto = await proyectoService.update(proyectoId, proyectoActualizado);
    return res.status(200).send(proyecto);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.delete("/api/proyecto/:id", async (req, res) => {
  try {
    const proyectoId = req.params.id;
    await proyectoService.remove(proyectoId);
    return res.status(200).send("Proyecto eliminado correctamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;