var express = require('express')
const slug = require('slug')
var router = express.Router()

var Bookmark = require('../models/bookmark')
var Tags = require('../models/tags')

// create bookmark
router.post('/create', async (req, res, next) => {
    try {
        var bookmark = await Bookmark.create(req.body.bookmark)
        res.status(201).json({
            bookmark: {
                link: bookmark.link,
                title: bookmark.title,
                publisher: bookmark.publisher,
                tags: bookmark.tags,
                slug: bookmark.slug
            }
        })
    } catch (error) {
        next(error)
    }
})

// delete bookmark
router.delete('/delete/:slug', async (req, res, next) => {
    try {
        var deleteBookmark = await Bookmark.findOneAndDelete({
            slug: req.params.slug,
        });
        res.json({ success: "remove from bookmark" });
    } catch (error) {
        next(error);
    }
})


module.exports = router