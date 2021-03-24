const fs = require('fs').promises;
const path = require('path');

const doesImageMatch = (images, basename) => {
  if (images.length === 0) {
    return true;
  }
  
  return images.some((image) => {
    const fileParts = path.parse(image);
    const reString = `^${fileParts.name}\\d*x*`
    const re = new RegExp(reString)
    return re.test(basename);
  });
}

const readImages = async (dir, acceptedExtensions, images = []) => {
  const files = await fs.readdir(dir);
  return files.reduce((accum, filename) => {
    if (
      acceptedExtensions.includes(path.extname(filename))
      && doesImageMatch(images, path.parse(filename).name)
    ) {
      return [...accum, `${dir}/${filename}`];
    }
    return accum;
  }, []);
};

module.exports = readImages;
