const fs = require('fs');
console.log('Starting to read file...');
fs.readFile('sample.txt', 'utf8', (error, data) => {
  if (error) {
    console.log('❌ ERROR:', error.message);
  } else {
    console.log('✅ File content:');
    console.log(data);
  }
});
console.log('File reading started (still waiting for it to finish)...');