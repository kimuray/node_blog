var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('up');
});

router.post('/', (req, res, next) => {
  var Post = module.parent.exports.get('Post');
  var post = new Post();
  post.comment = req.body.comment;
  post.name = req.body.name;
  var promise = post.save();
  promise.then((doc) => {
    res.render('up_post', doc);
  });
});

module.exports = router;
