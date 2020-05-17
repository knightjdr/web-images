const jimp = require('jimp');
const path = require('path');

const readImages = require('./read-images');

const convert = async (file, quality) => {
  const { name } = path.parse(file);
  const image = await jimp.read(file);
  image.quality(quality);
  await image.writeAsync(`./processed/${name}.jpg`);
};

const reduceJPG = async (quality) => {
  const files = await readImages('./scaled', ['.jpg', '.jpeg', '.png']);
  await files.reduce(async (prevPromise, filename) => {
    await prevPromise;
    return convert(filename, quality);
  }, Promise.resolve());
};

module.exports = reduceJPG;
