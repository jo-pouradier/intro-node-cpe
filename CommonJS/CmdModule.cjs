const { readdir } = require("fs");
const { extname } = require("path");
const { readdir: readdirPromise } = require("fs/promises");

/**
 * Le nommage de la fonction est important pour l'exportation
 * @param {*} directory 
 * @param {*} extension 
 */
module.exports.listFilesByExtension = async function listFilesByExtension(directory, extension) {
    try {
        return (await readdirPromise(directory))
            .filter((file) => !extension || extname(file) === `.${extension}`);
    } catch (error) {
        console.error("Erreur lors de la lecture du répertoire:", error);
    }
};

module.exports.listFilesByExtensionWithCallback = function listFilesByExtensionWithCallback(path, ext, callback) {
    readdir(path, (err, files) => {
        if (err) {
            return callback(err); // return needed to get out of this func
        } else {
            let result = files.filter((file) => !ext || extname(file) === `.${ext}`);
            callback(null, result);
        }
    });
};
