/**
 * iemoto
 * https://github.com/megumiteam/iemoto/blob/master/template.js
 *
 * Licensed under the GPLv2
 */

'use strict';

exports.description = 'Vagrant based WordPress development environment';

exports.notes = '';
exports.after = '';
exports.warnOn = '*';

var path = require('path');
var path_name = path.basename(process.cwd());

// The actual init template
exports.template = function( grunt, init, done ) {
    init.process( {}, [
        {
          name: 'hostname',
          message: 'hostname',
          default: function(value, data, done) {
            if (path_name.match(/\.[a-z]*$/)) {
                done(null, path_name);
            } else {
                done(null, 'vccw.dev');
            }
          }
        },
        init.prompt( 'ip', '192.168.55.10' ),
        init.prompt( 'wp_lang', 'en_US' ),
        init.prompt( 'wp_version', 'latest' )
    ], function( err, props ) {
        var files = init.filesToCopy(props);
        files['site.yml'] = 'vccw/templates/site.yml'
        init.copyAndProcess(files, props);
        done();
    });
};
