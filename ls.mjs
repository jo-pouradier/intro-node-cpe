import { readdir } from 'fs/promises';
import { extname } from 'path';

async function listFilesByExtension(directory, extension) {
  try {
    (await readdir(directory))
        .filter(file => !extension || extname(file) === `.${extension}`)
        .forEach(file => console.log(file));
  } catch (error) {
    console.error('Erreur lors de la lecture du répertoire:', error);
  }
}

const [directory, extension] = process.argv.slice(2);
listFilesByExtension(directory, extension);
