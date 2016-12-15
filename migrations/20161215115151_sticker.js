
exports.up = function(knex, Promise) {
  return knex.schema.table('sticker', table =>{
    table.boolean('is_lickable').defaultTo(false).notNullable();
    table.boolean('is_scratchable').defaultTo(false).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('sticker', table =>{
    table.dropColumn('is_lickable');
    table.dropColumn('is_scratchable');
  });
};
