import { app, BrowserWindow } from "electron";

import waitOn from "wait-on";
import express from "express";
import getPort from "get-port";
import useragent from "express-useragent";
import { resolve } from "path";

let win: BrowserWindow;

function loadContent(port = 3000) {
    win = new BrowserWindow();
    win.loadURL(`http://localhost:${port}`);
}

app.on("ready", async () => {
    if (process.env.NODE_ENV === "development") {
        // Importing dev dependencies
        const devtools = await import("electron-devtools-installer");

        // Installing devtools
        await devtools.default(devtools.VUEJS_DEVTOOLS);

        // Waiting for web server
        waitOn({ resources: [`http://localhost:3000`] }, loadContent);
    } else {
        const server = express();
        server.use(useragent.express());

        // Rejecting requests from browsers
        server.use((req, res, next) => {
            if (req.useragent.source.includes("Electron")) next();
            else res.end();
        });

        server.use(express.static(resolve(__dirname, "../renderer")));

        const port = await getPort();
        server.listen(port, "localhost", () => loadContent(port));
    }
});
