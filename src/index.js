// Importing required library
const QRCode = require('qrcode');

// Function to generate QR Code
function generateQRCode(text, options = {}) {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(text, options, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    });
}

// Exporting the function
module.exports = generateQRCode;

// Example usage
// generateQRCode("https://example.com").then((url) => {
//     console.log(url);
// }).catch((err) => {
//     console.error(err);
// });
