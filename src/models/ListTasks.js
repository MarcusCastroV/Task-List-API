const mongoose = require("mongoose")
const { Schema } = mongoose;

const tasksSchema = new Schema({
  title: String, 
  description: String,
  checked: Boolean,
  username: String
});

module.exports = mongoose.model("list_item", tasksSchema) 
