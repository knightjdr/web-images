const path = require('path');

const parseArgs = () => process.argv.slice(2).map((arg) => path.basename(arg));

module.exports = parseArgs;
