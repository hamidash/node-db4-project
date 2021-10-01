
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredient_name: "Onion",
        },
        {
          ingredient_name: "Butter",
        },
        {
          ingredient_name: "Potato",
        },
        {
          ingredient_name: "Salt",
        },
        {
          ingredient_name: "Fish",
        },
        {
          ingredient_name: "Chicken",
        },
        {
          ingredient_name: "Beef",
        }
      ]);
    });
};
