module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Name"
    },
    appId: {
      type: "string",
      required: true,
      message: "AppId",
      default: "com.example.app"
    },
    description: {
      type: "string",
      required: true,
      message: "Description",
      default: "My new awesome project"
    },
    author: {
      type: "string",
      required: true,
      message: "Author"
    },
    useYarn: {
      type: "confirm",
      required: false,
      message: "Use Yarn?",
      default: false
    },
    preprocessors: {
      type: "checkbox",
      required: false,
      message: "Preprocessors to use in Nuxt",
      choices: ["SASS/SCSS", "Pug", "TypeScript", "CoffeeScript"],
      default: []
    }
  },
  helpers: {
    pm(opts) {
      return opts.data.root.useYarn ? "yarn" : "npm run";
    },
    pp(opts) {
      let result = ",";
      let pps = opts.data.root.preprocessors;
      if (pps["Pug"])
        result += `
    "pug": "^2.0.3",
    "pug-plain-loader": "^1.0.0",`;
      if (pps["TypeScript"])
        result += `
    "ts-loader": "^5.3.3",`;
      if (pps["CoffeeScript"])
        result += `
    "coffee-loader": "^0.9.0",
    "coffeescript": "^2.3.2",`;
      if (pps["SASS/SCSS"])
        result += `
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",`;
      return result.replace(/.$/, "");
    }
  },
  completeMessage: "All done. Open your project and read README :)"
};
