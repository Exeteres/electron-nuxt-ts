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
    packageManager: {
      type: "list",
      message: "Package Manager",
      choices: [
        {
          name: "NPM",
          value: "npm"
        },
        {
          name: "Yarn",
          value: "yarn"
        }
      ]
    },
    preprocessors: {
      type: "checkbox",
      required: false,
      message: "Nuxt preprocessors",
      choices: ["SASS/SCSS", "Pug", "TypeScript", "CoffeeScript"],
      default: []
    }
  },
  helpers: {
    useYarn(opts) {
      if (opts.data.root.packageManager == "yarn") return opts.fn(this);
      return opts.inverse(this);
    },
    pm(opts) {
      return opts.data.root.packageManager == "yarn" ? "yarn" : "npm run";
    },
    has(v, opts) {
      if (opts.data.root.preprocessors[v]) return opts.fn(this);
      return opts.inverse(this);
    }
  },
  completeMessage: "All done. Open your project and read README :)"
};
