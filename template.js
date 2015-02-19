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

// The actual init template
exports.template = function( grunt, init, done ) {
    init.process( {}, [
        init.prompt( 'hostname', 'vccw.dev' ),
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
