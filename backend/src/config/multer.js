const multer = require('multer');
const path = require('path');
const crypto = require('crypto');


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads', 'compressed'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads', 'compressed'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(error);

                const fileName = `${hash.toString('hex')} - ${file.originalname}`;
                cb(null, fileName);
            });
        },

    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    // fileFilter: (request, file, cb) => {
    //     const allowedMimes = '/pdf';

    //     const extName = allowedMimes.test(path.extname(file.originalname).toLowerCase());

    //     if (extName == true) {
    //         return cb(null, true);
    //     } else {
    //         return cb(new Error("Invalid type."), false);
    //     }
    // }
};