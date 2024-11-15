import express from "express";
import fs from "fs";

const app = express();
const config = JSON.parse(fs.readFileSync("./src/config.json"));
const port = config.port;
const folder = config.folder;

app.use(express.static(folder));

app.get("/", (_, res) => {
    res.send("Hello World!");
});

app.use((_, res, _) => {
    res.status(404).send("Sorry can't find that!");
});

// listen a la fin pour éviter les erreurs lors de l'initialisation de 
// lapplication si il y a deja du traffic
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
