const fs = require('fs').promises;
const path = require('path');

const readImages = async (dir, acceptedExtensions) => {
  const files = await fs.readdir(dir);
  const imagefiles = files.reduce((accum, filename) => {
    if (acceptedExtensions.includes(path.extname(filename))) {
      return [...accum, `${dir}/${filename}`];
    }
    return accum;
  }, []);
  return imagefiles;
};

module.exports = readImages;
