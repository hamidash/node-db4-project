const recipesDb = require("../data/dbConfig");

const getRecipeById = async (recipe_id) => {
  const recipeStepsIngredients = await recipesDb("recipes as r")
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .where({ "r.recipe_id": recipe_id })
    .leftJoin("step_ingredient as sti", "st.step_id", "sti.step_id")
    .leftJoin("ingredients as i", "sti.ingredient_id", "i.ingredient_id")
    .select(
      "r.*",
      "st.step_id",
      "st.step_number",
      "st.step_instructions",
      "i.ingredient_name",
      "sti.quantity",
      "sti.ingredient_id"
    )
    .orderBy("r.recipe_id", "asc");

// console.log("Db:",recipeStepsIngredients);

  const fileteredRecipeStep = recipeStepsIngredients.filter(
    (recipe) => recipe.step_id !== null
  );

  const filteredStepIngredient = fileteredRecipeStep.filter(
    (ingredient) => ingredient.ingredient_id !== null
  );

  console.log("Recipe step Filtered:",fileteredRecipeStep);
  console.log("Ingredients Filtered:",filteredStepIngredient);

  const ingredientsOfStep = filteredStepIngredient.map((recipe) => {
    return {
      ingredient_id: recipe.ingredient_id,
      ingredient_name: recipe.ingredient_name,
      quantity: recipe.quantity,
    };
  });

  console.log("Ing array:",ingredientsOfStep)

  const stepsOfRecipe = fileteredRecipeStep.map((recipe) => {
    return {
      step_id: recipe.step_id,
      step_number: recipe.step_number,
      step_instructions: recipe.step_instructions,
      ingredients: ingredientsOfStep,
    };
  });



  const finalRecipeObj = {
    recipe_id: recipeStepsIngredients[0].recipe_id,
    recipe_name: recipeStepsIngredients[0].recipe_name,
    created_at: recipeStepsIngredients[0].created_at,
    steps: fileteredRecipeStep.length > 0 ? stepsOfRecipe : [],
  };

  return finalRecipeObj;
};

module.exports = { getRecipeById };
