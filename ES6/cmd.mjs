import * as Cmd from "./CmdModule.mjs";
import CmdClass from "./CmdClass.mjs";

Cmd.listFilesByExtensionWithPromise(process.argv[2], process.argv[3]).then((files) => {
    console.log(`files from listFilesByExtensionWithPromise: ${files}`);
});

Cmd.listFilesByExtensionWithCallback(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`files from listFilesByExtensionWithCallback: ${files}`);
    }
});

CmdClass.lsWithCallback(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`files from lsWithCallback: ${files}`);
    }
});

CmdClass.lsWithPromise(process.argv[2], process.argv[3]).then((files) => {
    console.log(`files from lsWithPromise: ${files}`);
});

CmdClass.lsWithPromise2(process.argv[2], process.argv[3]).then((files) => {
    console.log(`files from lsWithPromise2: ${files}`);
});
