// ===================================
// FILE SYSTEM OPERATIONS
// ===================================

const fs = require('fs');
const http = require('http');

console.log('=== FILE SYSTEM OPERATIONS ===\n');

// 1. WRITE - Create a new file
fs.writeFile('demo.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('✓ File WRITTEN: demo.txt');
});

// 2. READ - Read file content
fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Read error (file may not exist yet)');
  } else {
    console.log('✓ File READ:', data);
  }
});

// 3. APPEND - Add content to end of file
fs.appendFile('demo.txt', '\nAppended text!', (err) => {
  if (err) throw err;
  console.log('✓ Text APPENDED to demo.txt');
});

// 4. RENAME - Rename a file
fs.rename('demo.txt', 'renamed.txt', (err) => {
  if (err) {
    console.log('Rename error (file may not exist yet)');
  } else {
    console.log('✓ File RENAMED: demo.txt → renamed.txt');
  }
});

// 5. COPY - Copy a file
fs.copyFile('renamed.txt', 'copy.txt', (err) => {
  if (err) {
    console.log('Copy error (file may not exist yet)');
  } else {
    console.log('✓ File COPIED: renamed.txt → copy.txt');
  }
});

// 6. UNLINK - Delete a file
fs.unlink('copy.txt', (err) => {
  if (err) {
    console.log('Delete error (file may not exist yet)');
  } else {
    console.log('✓ File DELETED: copy.txt');
  }
});


// ===================================
// HTTP SERVER
// ===================================

console.log('\n=== HTTP SERVER ===\n');

const server = http.createServer((req, res) => {
  
  // HOME PAGE
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body>');
    res.write('<h1>Node.js Demo Server</h1>');
    res.write('<ul>');
    res.write('<li><a href="/about">About</a></li>');
    res.write('<li><a href="/contact">Contact</a></li>');
    res.write('<li><a href="/api">API (JSON)</a></li>');
    res.write('<li><a href="/file">View File</a></li>');
    res.write('</ul>');
    res.write('</body></html>');
    res.end();
  }
});
  
// START SERVER
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✓ Server running at http://localhost:${PORT}/`);
  
});