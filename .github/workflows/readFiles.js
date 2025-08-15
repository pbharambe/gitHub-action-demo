const fs = require('fs');
const PropertiesReader = require('properties-reader');

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
console.log('JSON Data:', jsonData);

// Read Properties file
const properties = PropertiesReader('config.properties');
console.log('Property value for "app.name":', properties.get('app.name'));