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
        // nothing
    ], function( err, props ) {
        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);
        done();
    });
};
