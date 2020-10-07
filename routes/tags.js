var express = require('express')
var router = express.Router()
var Tags = require('../models/tags')
var Bookmark = require('../models/bookmark')

// create tag
router.post('/create', async (req, res, next) => {
    try {
        var tag = await Tags.create(req.body.tag)
        res.status(201).json({
            tag: {
                title: tag.title
            }
        })
    } catch (error) {
        next(error)
    }
})

// delete tag
router.delete('/delete/:id', async (req, res, next) => {
    try {
        var deleteTag = await Tags.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: "Delete tag" })
    } catch (error) {
        next(error)
    }
})

// add tag to bookmark
router.post('/:slug/:id', async (req, res, next) => {
    try {
        var slug = req.params.slug
        var bookmark = await Bookmark.findOne({ slug })
        var tag = await Tags.findById(req.params.id)
        bookmark = await Bookmark.findByIdAndUpdate(
            bookmark.id,
            { $addToSet: { tags: tag.id } },
            { new: true }
        )
        res.status(201).json({ bookmark })
    } catch (error) {
        error(next)
    }
})


// remove tag from bookmark
router.delete("/:slug/:id", async (req, res, next) => {
    try {
        var slug = req.params.slug
        var bookmark = await Bookmark.findOne({ slug })
        var tag = await Tags.findById(req.params.id)
        bookmark = await Bookmark.findByIdAndUpdate(
            bookmark.id,
            { $pull: { tags: tag.id } },
            { new: true }
        )
        res.status(201).json({ bookmark })
    } catch (error) {
        error(next)
    }
})
module.exports = router