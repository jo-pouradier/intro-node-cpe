// import * as Cmd from './CmdModule.cjs';
const Cmd = require('./CmdModule.cjs');

Cmd.listFilesByExtension(process.argv[2], process.argv[3])
    .then((files) => {
        console.log(files);
    });

Cmd.listFilesByExtensionWithCallback(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.error(err);
    } else {
        console.log(files);
    }
});