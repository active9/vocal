var vocal = require("../lib/vocal.js");

vocal("Testing 1 2 3 Testing One Two Three.. Is this thing on?", function() {
  return vocal("Ok great. Hello and welcome. This is vocal a free tts module.", function() {
    return vocal("I am a module for node js and also coffeescript.", function() {
      return vocal("I am licensed under the M I T license. For free use in your projects.", function() {
        return vocal("This project is Open Source and forking and pulling are welcome.", function() {
          return vocal("Thank you, have a great day.");
        });
      });
    });
  });
});