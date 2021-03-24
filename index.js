const copyImages = require('./copy-images');
const convertWebp = require('./convert-webp');
const createFolder = require('./create-folder');
const parseArgs = require('./args');
const readImages = require('./read-images');
const reduceJPG = require('./reduce-jpg');
const scaleImages = require('./scale-images');

const quality = 70;

const convertImages = async () => {
  try {
    const images = parseArgs();
    await Promise.all([createFolder('processed'), createFolder('scaled')]);
    const files = await readImages('./unprocessed', ['.jpg', '.jpeg', '.png'], images);
    await copyImages(files);
    await scaleImages(files);
    await convertWebp(quality, files);
    await reduceJPG(quality, files);
  } catch (error) {
    console.log(error);
  }
};

convertImages();
