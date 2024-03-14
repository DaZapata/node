
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ').length;

const words = content.split(' ');

const daveWordsCount = content.match(/david/gi ?? []).length;

console.log('Palabras', wordCount);
console.log('Palabra David', daveWordsCount);