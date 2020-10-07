var mongoose = require('mongoose')
var slug = require("slug")
var Schema = mongoose.Schema

var bookmarkSchema = new Schema({
    link: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tags"
    }],
    slug: {
        type: String
    }

}, { timestamps: true })

bookmarkSchema.pre('save', async function (next) {
    try {
        if (this.link) {
            var bookmarkSlug = slug(this.link, { lower: true })
            this.slug = bookmarkSlug
        }
    } catch (error) {
        next(error)
    }
})


module.exports = mongoose.model("Bookmark", bookmarkSchema)