const fs = require('fs');
const parseString = require('xml2js').parseString;

const xml = fs.readFileSync('./facebook.xsd');
parseString(xml, (err, result) => {
  const str = JSON.stringify(result, null, 2);
  console.log(str);
  fs.writeFileSync('./out.json', str);
});
