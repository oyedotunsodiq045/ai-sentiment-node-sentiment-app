const express = require('express');
const router = express.Router();
const Sentiment = require('sentiment');

// Interpreting the Sentiment Score
// The sentiment analyzer gives us a score, which we'll need to interpret. 
// We can create a function that translates these numerical sentiment scores into human - readable sentiments:
function interpretSentiment(score) {
  if (score > 0.5) return "Strongly Positive";
  if (score > 0) return "Positive";
  if (score === 0) return "Neutral";
  if (score > -0.5) return "Negative";
  return "Strongly Negative";
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sentiment' });
});

/* handling the text */
router.post('/text', function (req, res, next) {
  var sentiment = new Sentiment();
  var sentences = req.body.text;
  var result = sentiment.analyze(sentences);
  var messageResult = interpretSentiment(result.score)
  res.status(201).json({ 'message': `This text score is ${messageResult}`, 'result' : result });
  console.dir(messageResult);
  console.dir(result);
});

module.exports = router;
