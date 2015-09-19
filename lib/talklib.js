var fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn,
    child;

var talklib = function() {
	// Prototype
};

talklib.prototype.speak = function(voice, txt, cb) {
	var pipedata = '(' + voice +') ( SayText \"' + txt + '\")';
	this.pipe(voice, ['--pipe'], pipedata, cb);
};

talklib.prototype.sing = function(voice, song, cb) {
	var pipedata = this.tunnel(voice, song, cb);
};

talklib.prototype.pipe = function(voice, commands, data, cb) {
	var app = spawn('festival', commands);
	app.stdin.setEncoding('ascii');
	app.stderr.setEncoding('ascii');
	app.stdin.end(data);
	app.stderr.on('data', function(data){ console.log(data); });
	app.stdout.on('data', function(data){ console.log(data); });
	app.addListener('exit', function (code, signal) {
		if (!code & signal) {
			console.log("Error: ", code, signal);
		}
		return cb();
	})
};

talklib.prototype.diaphragm = function(pitch) {
    if (pitch.rest) {
        return '<REST BEATS='
            + JSON.stringify(pitch.rest.toString()) + '>'
            + '</REST>'
        ;
    }  else if (pitch.note) {
        return '<PITCH NOTE='
            + JSON.stringify(pitch.note.toString())
            + '>'
            + pitch.durations
                .map(function (d) {
                    return '<DURATION BEATS='
                        + JSON.stringify(d.beats.toString())
                        + '>' + d.text + '</DURATION>';
                })
                .join('\n')
            + '</PITCH>'
        ;
    } else {
        throw new Error('Pitch has no note or rest');
    }
};

talklib.prototype.tunnel = function(voice, song, cb) {
	var self = this;
	var xmlfile = './'
        + Math.floor(Math.random() * Math.pow(2,16)).toString(16)
        + '.xml';
	var xml = '<?xml version="1.0"?>\n'
            + '<!DOCTYPE SINGING PUBLIC "-//SINGING//DTD SINGING mark up//EN"'
            + ' "Singing.v0_1.dtd" []>\n'
            + '<SINGING BPM="30">'
            + song.map(self.diaphragm).join('\n')
            + '</SINGING>'
        ;
        fs.writeFile(xmlfile, xml, function (err) {
            if (err) console.error(err)
            else
				self.pipe(voice, ['--pipe'], '(tts ' + JSON.stringify(xmlfile) +' \'singing)\n', cb);
        });

};

module.exports = talklib;
