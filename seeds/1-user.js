
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3;')
    .then(function () {
      const users = [{
        id: 1,
        email: "darren@domain.com",
        password: 'darren-pw',
        created: new Date()
      },{
        id: 2,
        email: "matt@domain.com",
        password: 'matt-pw',
        created: new Date()
      }];
      return knex('user').insert(users);
    });
};
