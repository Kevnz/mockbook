const jsf = require('json-schema-faker');


const schema = './facebook.json';

jsf.resolve(schema).then((result) => {
  console.log(JSON.stringify(result, null, 2));
});
var jsf = require('json-schema-faker');
var schema = require('./schema.json');

var sample = jsf(schema);
console.log(sample);

