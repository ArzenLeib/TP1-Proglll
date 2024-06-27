const proyectoModel = require("../../models/proyecto");
const pager = require("../../utils/pager");

async function findOneById(_id) {
  return await proyectoModel.findById(_id).populate('responsable').exec();
}

async function save(proyecto) {
  if (proyecto.fecha) {
    proyecto.fecha = new Date(proyecto.fecha);
  }
  
  let _proyecto = new proyectoModel(proyecto);
  return await _proyecto.save();
}

async function paginated(params) {
  let perPage = params.perPage ? params.perPage : 10, page = Math.max(0, params.page);
  let filter = params.filter ? params.filter : {};
  let sort = params.sort ? params.sort : {};

  let count = await proyectoModel.countDocuments(filter);
  let data = await proyectoModel.find(filter)
    .limit(perPage)
    .skip(perPage * page)
    .sort(sort)
    .populate('responsable')
    .exec();

  return pager.createPager(page, data, count, perPage);
}

async function update(id, updatedProyecto) {
  if (updatedProyecto.fecha) {
    updatedProyecto.fecha = new Date(updatedProyecto.fecha);
  }
  
  return await proyectoModel.findByIdAndUpdate(id, updatedProyecto, { new: true }).exec();
}

async function remove(id) {
  return await proyectoModel.findOneAndDelete({ _id: id }).exec();
}

module.exports = { findOneById, save, paginated, update, remove };