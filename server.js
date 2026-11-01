const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 5500;
const ROOT_DIR = path.join(__dirname, 'frontend');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl === '/' || cleanUrl === '') cleanUrl = '/index.html';

  let filePath = path.join(ROOT_DIR, cleanUrl);

  if (!fs.existsSync(filePath)) {
    // Check in root directory as fallback
    filePath = path.join(__dirname, cleanUrl);
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + cleanUrl);
    return;
  }

  if (fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  const url = `http://127.0.0.1:${PORT}/index.html`;
  console.log('====================================================');
  console.log('   SWASTHYA SENSE Local Web Server Running!');
  console.log(`   URL: ${url}`);
  console.log('   Press Ctrl+C to stop the server.');
  console.log('====================================================');

  // Auto open browser on Windows
  exec(`start "" "${url}"`);
});
