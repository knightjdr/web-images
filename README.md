# web-images

Image processing for web images

## Dependencies

[cwebp](https://developers.google.com/speed/webp/download)

## Convert images

Convert images to WebP and reduce quality of JPEGs.

1. Create image at 3x the required dimensions and place in `unprocessed`.

2. Convert images
```
node index.js
```

Alternatively to only convert some images, provide their names as arguments. The `unprocessed`
folder name is optional.

```
node index.js unprocessed/image1.png image2.png
```

3. JPEGs and WebP at 1x, 2x and 3x scale will be in the `processed` folder. The 3x images
correspond to the dimensions of the original image.
