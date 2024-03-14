
const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const newData = data.replace(/Lorem/ig, 'David');

fs.writeFileSync('README-Loren.md', newData);