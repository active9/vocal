#Talk
![Talk - Festival TTS Wrapper](https://raw.githubusercontent.com/active9/talk/master/talk.png)

Talk is a festival TTS wrapper written in NodeJS.

#FEATURES
 - voice_cmu_us_slt_arctic_hts
 - Talk binary global
 - Module Based TTS

#INSTALLING
Using Git:
```bash
git clone https://github.com/active9/talk
cd talk*
npm install
```

Using NPM:
```bash
npm install -g talk
```
Once installed run

```bash
talk "Hello There"
```

#MODULE
Talk may also run included as a module in your projects.
```js
var talk = require("../lib/talk.js");

talk("Testing 1 2 3 Testing One Two Three.. Is this thing on?", function() {
  // More Code Here
});
```

#EXAMPLES
More examples in the [examples](https://github.com/active9/talk/tree/master/examples) folder on the github repo.

~Enjoy!

#REQUIREMENTS
- [Festival](http://www.cstr.ed.ac.uk/projects/festival/)
- [voice_cmu_us_slt_arctic_hts](http://homepages.inf.ed.ac.uk/jyamagis/misc/Practice_of_Festival_speech_synthesizer.html)


#TODO
- Finish the talk.sing method.

#CONTRIB

Talk is open-source via the MIT license we encourage Forking.

#LICENSE
MIT

