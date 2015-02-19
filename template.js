/**
 * iemoto
 * https://github.com/megumiteam/iemoto/blob/master/template.js
 *
 * Licensed under the GPLv2
 */

'use strict';

exports.description = 'Create a WordPress theme based on Automattic\'s _s starter theme.';

exports.notes = '';
exports.after = '';
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
    init.process( {}, [
        // Prompt for these values.
        init.prompt( 'hostname', 'vccw.dev' ),
        init.prompt( 'ip', '192.168.55.10' ),
        init.prompt( 'lang', 'en_US' ),
        {
            name: 'gulp',
            message: 'Use gulp?',
            default: 'y/N'
        }
    ], function( err, props ) {
        props.keywords = [];
        props.version = '0.1.0';
        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);
        // Done!
        done();
    });
};
