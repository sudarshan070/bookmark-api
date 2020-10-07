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


module.exports = router