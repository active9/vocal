var talk = require("../lib/talk.js");

talk("Testing 1 2 3 Testing One Two Three.. Is this thing on?", function() {
  return talk("Ok great. Hello and welcome. This is talk a free tts module.", function() {
    return talk("I am a module for node js and also coffeescript.", function() {
      return talk("I am licensed under the M I T license. For free use in your projects.", function() {
        return talk("This project is Open Source and forking and pulling are welcome.", function() {
          return talk("Thank you, have a great day.");
        });
      });
    });
  });
});