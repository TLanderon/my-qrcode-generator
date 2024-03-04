# QR Code Generator

A simple QR Code Generator written in JavaScript.

## Installation

You can install this package via npm:

```bash
npm install my-qrcode-generator
```

## Usage

```javascript
const generateQRCode = require('my-qrcode-generator');

generateQRCode("https://example.com").then((url) => {
    console.log(url);
}).catch((err) => {
    console.error(err);
});
```

## API

### `generateQRCode(text, options)`

Generates a QR Code for the provided text.

- `text`: The text to encode into the QR Code.
- `options` (optional): An object containing options for customizing the QR Code generation (e.g., size, error correction level).

Returns a Promise that resolves with the data URL of the generated QR Code image.

## Example

Generate a QR Code for a website URL:

```javascript
generateQRCode("https://example.com").then((url) => {
    console.log(url);
}).catch((err) => {
    console.error(err);
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
