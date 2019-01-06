const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

app.on("ready", () => {
  win = new BrowserWindow();
  if (process.env.NODE_ENV === "development") {
    // Importing dev dependencies
    const waitOn = require("wait-on");
    const {
      default: installExtension,
      VUEJS_DEVTOOLS
    } = require("electron-devtools-installer");

    // Installing devtools
    installExtension(VUEJS_DEVTOOLS).then(() => {
      // Wating for nuxt
      waitOn({ resources: ["http://localhost:3000"], log: true }, () => {
        // Loading nuxt
        win.loadURL("http://localhost:3000");
      });
    });
  } else win.loadFile("./dist/renderer/index.html");
});
