const Xsd2JsonSchema = require('xsd2jsonschema').Xsd2JsonSchema;

const options = {
  outputDir: 'generated_jsonschema',
  baseId: 'http://www.xsd2jsonschema.org/schema/',
  xsdBaseDir: './'
};

const converter = new Xsd2JsonSchema(options);

converter.processAllSchemas({
  xsdFilenames: [
    'facebook.xsd'
  ]
});
converter.writeFiles();
converter.dump();
converter.dumpSchemas();
