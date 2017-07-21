const codeblox = require('codeblox');
const request = require('request');
const endpoint = 'https://restcountries.eu/rest/v2/name/';

module.exports.default = codeblox((input, options, callback) => {
  request.get(`${endpoint}${input}`, (err, res, body) => {
    callback(null, JSON.parse(body)[0].alpha2Code);
  });
});
