const fs = require('fs').promises;
const path = require('path');

const copyImages = async (files) => {
  await files.reduce(async (prevPromise, filename) => {
    const { ext, name } = path.parse(filename);
    await prevPromise;
    return fs.copyFile(filename, `./scaled/${name}${3}x${ext}`);
  }, Promise.resolve());
};

module.exports = copyImages;
