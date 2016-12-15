const knex = require('./connection'); // db connection

module.exports = {
// function getOne(id) {
  getOne: function(id) {
    return knex('user')
      .where('id', id)
      .first();
  }
};
// module.exports = {
//   getOne
// };
