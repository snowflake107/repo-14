const docs = require("./docs");
const start = require("./start");
const guides = require("./guides");
const tutorials = require("./tutorials");
const integrations = require("./integrations");
const api = require("./api");

module.exports = [...docs, ...start, ...guides, ...integrations, ...tutorials, ...api];
