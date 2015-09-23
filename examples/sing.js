var vocal;
vocal = require("../lib/vocal.js");
vocal([
  {
    note: 'E3',
    durations: [
      {
        beats: 0.3,
        text: 'hello'
      }
    ]
  }, {
    note: 'F#4',
    durations: [
      {
        beats: 0.3,
        text: 'blind'
      }
    ]
  }, {
    note: 'C3',
    durations: [
      {
        beats: 0.3,
        text: 'world'
      }
    ]
  }
], function() {});