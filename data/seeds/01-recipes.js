
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Borsh soup'},
        {recipe_name: 'French stake'},
        {recipe_name: 'Grape leave dolma'}
      ]);
    });
};
