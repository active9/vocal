var talk;
talk = require("../lib/talk.js");
talk([
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