const jmespath = require('jmespath');
const fs = require('fs');

let result = jmespath.search(
  require('/data.json'),
  fs.readFileSync('/query').toString(),
)

if ('string' !== typeof result){
  result = JSON.stringify(result);
}

fs.writeFileSync('/result', result);