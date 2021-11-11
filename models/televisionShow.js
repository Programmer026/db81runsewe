const mongoose = require("mongoose");
const televisionShowSchema = mongoose.Schema({
    ts_name: String,
    ts_runtime: Number,
    ts_broadcastchannel: String
})

module.exports = mongoose.model("TelevisionShow", televisionShowSchema);