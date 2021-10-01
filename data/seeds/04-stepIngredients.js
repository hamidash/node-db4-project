
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredient').insert([
        {ingredient_id: 2, step_id: 2, quantity: 16 },
        {ingredient_id: 1, step_id: 3, quantity: 0.5 },
      ]);
    });
};
