const VideoSystems = require('../models/VideoSystems');
const errorHandler = require('../utils/errorHandler');
const ObjectId = require('mongoose').Types.ObjectId;


module.exports.getById = async (req, res, next) => {
  try {
      const task = await VideoSystems.findOne({
          _id: req.params.id,
      });
      if (!task) throw errorConfig.taskNotFound;
      res.json(task.toObject());
  } catch (err) {
      next(err)
  }
}

module.exports.getAll = async function (req, res) {
    try {
        const videoSystems = await VideoSystems.find({});
        res.status(200).json(videoSystems)
    } catch (e) {
        errorHandler(res, e)
    }
}


module.exports.addTask = async (req, res, next) => {
  try {
      const taskData = {
          owner: ObjectId(res.locals.userId),
          ...req.body,
      }

      const task = await VideoSystems.create(taskData);
      res.json(task);
  } catch (err) {
      next(err)
  }
}


























//   const axios = require('axios')

// axios
//   .post('/:id', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })