import { readdir } from "fs";
import { extname } from "path";
import { readdir as readdirPromise } from "fs/promises";

export default class CmdClass {
    static lsWithCallback = (path, ext, callback) => {
        readdir(path, (err, files) => {
            if (err) {
                return callback(err); // return needed to get out of this func
            } else {
                let result = files.filter((file) => !ext || extname(file) === `.${ext}`);
                return callback(null, result);
            }
        });
    };

    static lsWithPromise = async (directory, extension) => {
        try {
            return (await readdirPromise(directory)).filter(
                (file) => !extension || extname(file) === `.${extension}`
            );
        } catch (error) {
            console.error("Erreur lors de la lecture du répertoire:", error);
            return null;
        }
    };

    static lsWithPromise2 = async (directory, extension) => {
        return readdirPromise(directory)
            .then((files) => {
                return files.filter((file) => !extension || extname(file) === `.${extension}`);
            })
            .catch((error) => {
                console.error("Erreur lors de la lecture du répertoire:", error);
                return null
            });
    };
}
