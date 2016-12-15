const knex = require('./connection'); // db connection

module.exports = {
  getByUser: function(id){
    return knex('sticker')
    .where('user_id', id);
  }
};
