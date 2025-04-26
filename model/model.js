const mongoose = require("mongoose")
const mys = require("../schema/schema")
const mym = mongoose.model("mym",mys)
module.exports = mym