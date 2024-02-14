const express = require('express');
const router = express.Router();
var Sentiment = require('sentiment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sentiment' });
});

/* handling the text */
router.post('/text', function (req, res, next) {

  var sentiment = new Sentiment();
  var sentences = req.body.text;
  var result = sentiment.analyze(sentences);
  res.status(201).json({ 'result' : result });
  console.dir(result);
});

module.exports = router;
