var talklib = require('./talklib')

var talk = function(words,cb) {
  var talkapp = new talklib();
  if (typeof words ===  'object') {
    talkapp.sing('voice_cmu_us_slt_arctic_hts', words, cb);
  } else {
    talkapp.speak('voice_cmu_us_slt_arctic_hts', words, cb);
  }
}

module.exports = talk;
