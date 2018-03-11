const jmespath = require('jmespath');
const fs = require('fs');

const object = jmespath.search(
  require('/object.json'),
  fs.readFileSync('/query').toString(),
)

fs.writeFileSync('/object.json', JSON.stringify(object));