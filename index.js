const express = require('express');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const app = express();
const PORT = 3000;
const folderPath = path.join(__dirname, 'files');


if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}


app.post('/create-timestamp', (req, res) => {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    const filename = moment().format('YYYY-MM-DD_HH-mm-ss') + '.txt';
    const filePath = path.join(folderPath, filename);

    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing file', error: err });
        }
        res.status(200).json({ message: 'File created', filename });
    });
});


app.get('/list-timestamps', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading directory', error: err });
        }
        res.status(200).json({ files });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
