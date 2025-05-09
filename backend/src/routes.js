const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer.js');
const fs = require('fs');
const path = require('path');
const { ChatGptService } = require('./service/ChatGptService.js');
const PDFDocument = require('pdf-lib').PDFDocument;

const ensureDirectoriesExist = () => {
    const dirs = [
        './tmp/uploads/compressed',
        './uploads/compressed'
    ];

    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
};

const chatGptService = new ChatGptService();

routes.post("/chatgpt", async (req, res) => {
    const prompt = req.body;

    if (!prompt) {
        return res.status(400).send('Prompt vazio');
    }

    const response = await chatGptService.getResponse(prompt);
    return res.json({
        response,
    });
});

routes.post("/postfile", multer(multerConfig).single('file'), (request, response) => {
    console.log(request.file);
    ensureDirectoriesExist();

    const filePath = `./tmp/uploads/compressed/${request.file.filename}`;
    const existingPdfBytes = fs.readFileSync(filePath);
    compressProcess(existingPdfBytes, request.file.filename);
    return response.status(200).send("process completed.");
});

const compressProcess = async (existingPdfBytes, fileName) => {
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const compressedPdfBytes = await pdfDoc.save();
    fs.writeFileSync(`./uploads/compressed/${fileName}`, compressedPdfBytes);
}


module.exports = routes;