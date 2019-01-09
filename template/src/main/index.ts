const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const waitOn = require("wait-on");

const express = require("express");
const getPort = require("get-port");
const useragent = require("express-useragent");

let win;

function loadContent(port = 3000) {
  win = new BrowserWindow();
  win.loadURL(`http://localhost:${port}`);
}

app.on("ready", () => {
  if (process.env.NODE_ENV === "development") {
    // Importing dev dependencies
    const {
      default: installExtension,
      VUEJS_DEVTOOLS
    } = require("electron-devtools-installer");

    // Installing devtools
    installExtension(VUEJS_DEVTOOLS).then(() => {
      waitOn({ resources: [`http://localhost:3000`], log: true }, () => {
        loadContent();
      });
    });
  } else {
    let server = express();
    server.use(useragent.express());

    // Rejecting requests from browsers
    server.use((req, res, next) => {
      if (req.useragent.source.includes("Electron")) next();
      else res.end();
    });
    server.use(express.static(path.resolve(__dirname, "../renderer")));

    getPort().then(port => {
      server.listen(port, "localhost", () => {
        loadContent(port);
      });
    });
  }
});
