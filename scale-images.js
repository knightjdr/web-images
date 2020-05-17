const jimp = require('jimp');
const path = require('path');

const scaleImage = async (filename, scale) => {
  const { ext, name } = path.parse(filename);
  const image = await jimp.read(filename);
  image.scale(scale / 3);
  await image.writeAsync(`./scaled/${name}${scale}x${ext}`);
};

const scaleImages = async (files) => {
  await files.reduce(async (prevPromise, filename) => {
    await prevPromise;
    return Promise.all([scaleImage(filename, 2), scaleImage(filename, 1)]);
  }, Promise.resolve());
};

module.exports = scaleImages;
