var mongoose = require("mongoose")
var Schema = mongoose.Schema

var tagsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Tags", tagsSchema)