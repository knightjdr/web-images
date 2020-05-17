const path = require('path');
const { spawn } = require('child_process');

const readImages = require('./read-images');

const convert = (file, quality) => (
  new Promise((resolve) => {
    const { name } = path.parse(file);
    const process = spawn(
      'cwebp',
      ['-q', quality, file, '-o', `./processed/${name}.webp`],
    );
    process.on('error', () => {
      resolve();
    });
    process.on('exit', () => {
      resolve();
    });
  })
);

const convertWebp = async (quality) => {
  const files = await readImages('./scaled', ['.jpg', '.jpeg', '.png']);
  await files.reduce(async (prevPromise, filename) => {
    await prevPromise;
    return convert(filename, quality);
  }, Promise.resolve());
};

module.exports = convertWebp;
