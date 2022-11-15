module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};

//envName: "APP_ENV",
//blocklist: null,
//allowlist: null,
//blacklist: null, // DEPRECATED
//whitelist: null, // DEPRECATED
//safe: false,
//allowUndefined: false,
//verbose: false,
