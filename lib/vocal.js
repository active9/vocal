var vocallib = require('./vocallib')

var vocal = function(words,cb) {
  var vocalapp = new vocallib();
  if (typeof words ===  'object') {
    vocalapp.sing('voice_cmu_us_slt_arctic_hts', words, cb);
  } else {
    vocalapp.speak('voice_cmu_us_slt_arctic_hts', words, cb);
  }
}

module.exports = vocal;
