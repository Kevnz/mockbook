const schema = require('./x2out.json');

const userSchema = schema.elements[0].elements.filter((element) => {
  return element.type ==='element' && element.name === 'xsd:complexType' && element.attributes.name === 'user';
});

schema.elements[0].elements.forEach((element) => {
  if (element.type ==='element' && element.name === 'xsd:complexType' && element.attributes.name === 'user') {
    console.log(element.attributes.name);
    console.log('teh thign', element.elements[0].elements);
    const deep = element.elements[0].elements.map(attr => attr.attributes);
    const stuff = deep.map((attr) => {
      console.log('attribute', attr);
      const isXsd = attr.type && attr.type.indexOf('xsd') > -1;
      return {
        name: attr.name,
        type: isXsd ? attr.type.split(':')[1] : attr.type
      };
    });
    console.log('stuff', stuff);
  }
});

console.log("That's all folks...", userSchema);
