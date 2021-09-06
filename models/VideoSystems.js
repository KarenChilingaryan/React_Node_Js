const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;

const videoSystemsSchema = new Schema(
    {
      owner: {
        type: String,
        required: true
      },
      name: {
      type: String,
      required: true
      },
      index: {
      type: Number,
      required: true
      },
      status: {
        type: String,
        default: 'active',
        enum: ['active', 'done']
      },
      createdOn: {
        type: String,
        required: true
      },
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    }
  )
module.exports = mongoose.model('task', videoSystemsSchema);
