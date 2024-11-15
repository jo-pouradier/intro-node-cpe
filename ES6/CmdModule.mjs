import { readdir as readdirPromise } from "fs/promises";
import { readdir } from "fs";
import { extname } from "path";

export async function listFilesByExtensionWithPromise(directory, extension) {
    try {
        return (await readdirPromise(directory))
            .filter((file) => !extension || extname(file) === `.${extension}`);
    } catch (error) {
        console.error("Erreur lors de la lecture du répertoire:", error);
    }
};

export function listFilesByExtensionWithCallback(path, ext, callback) {
    readdir(path, (err, files) => {
        if (err) {
            return callback(err); // return needed to get out of this func
        } else {
            let result = files.filter((file) => !ext || extname(file) === `.${ext}`);
            return callback(null, result);
        }
    });
};
