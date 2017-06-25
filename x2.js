const convert = require('xml-js');
const fs = require('fs');

const xml = fs.readFileSync('./facebook.xsd');
const result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
const result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
console.log(result1, '\n', result2);
fs.writeFileSync('./x2out.json', result2);
