const express = require('express');
const router = express.Router();
const Sentiment = require('sentiment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sentiment' });
});

/* handling the text */
router.post('/text', function (req, res, next) {

  let sentiment = new Sentiment();
  let result = sentiment.analyze(req.body.comment);
  res.status(201).json({ 'result' : result });
  // console.dir(result);
});

module.exports = router;
