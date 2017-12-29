var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  var Post = module.parent.exports.get('Post');
  Post.find().sort({_id: -1}).exec((err, posts) => {
    res.render('index', { title: '書き込み一覧', posts: posts });
  });
});

module.exports = router;
