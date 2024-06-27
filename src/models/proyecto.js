const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proyectoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fecha: Date,
  responsable: { type: Schema.Types.ObjectId, ref: 'User' }
});

const proyectoModel = mongoose.model("Proyecto", proyectoSchema);

module.exports = proyectoModel;
