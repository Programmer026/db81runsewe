const mongoose = require("mongoose");
const televisionShowSchema = mongoose.Schema({
    ts_name: {type:String, required:true},
    ts_runtime: {type:Number, min:25, max:200},
    ts_broadcastchannel: String
})

module.exports = mongoose.model("TelevisionShow", televisionShowSchema);