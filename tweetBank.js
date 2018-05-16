const _ = require('lodash');

var data = [];
var nroid = 0;

function add(name, content) {
  data.push({ name: name, content: content, id: nroid });
  nroid++;
}
function list() {
  return _.cloneDeep(data);
}
function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}
module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = [
    'Ori',
    'Manu',
    'Santi',
    'Facu',
    'Alan',
    'Pinki',
    'Tincho',
    'Solano',
    'R2D2',
  ];
  const fakeLasts = [
    'Chacon ',
    'Grondona',
    'Tralice',
    'Velasco',
    'Sainz',
    'Palacio',
    'Palacios',
    'Lidueña',
    'Fisicaro',
    'Ecma',
  ];
  return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};
const getFakeTweet = function() {
  const awesome_adj = [
    'increible',
    'emocionante',
    'increible',
    'gracioso',
    'dulce',
    'cool',
    'sorprendente',
    'impresionante',
  ];
  return (
    'Plataforma 5 es ' +
    randArrayEl(awesome_adj) +
    '! Los profesores simplemente son ' +
    randArrayEl(awesome_adj) +
    '. #P5Love #codedreams'
  );
};
for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}
