const { alias, configPaths } = require("react-app-rewire-alias");

const aliasMap = configPaths("./jsconfig.json");

module.exports = alias(aliasMap);
