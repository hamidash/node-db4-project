
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number:1, 
          step_instructions: "Take a deep fryer pan",
          recipe_id:1
        },
        {
          step_number:2, 
          step_instructions: "Add 16 ounces of butter",
          recipe_id:1
        },
        {
          step_number:3, 
          step_instructions: "Add 1 cup onion",
          recipe_id:1
        },
        {
          step_number:14, 
          step_instructions: "Add peppers 2 tea spoon",
          recipe_id:3
        },
        {
          step_number:15, 
          step_instructions: "Put the tray in the oven for 30 mins",
          recipe_id:2
        }
      ]);
    });
};
