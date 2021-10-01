const router = require("express").Router()
const recipesDb = require('./recipes-model');

router.get('/:recipe_id', (req, res, next)=> {
    const {recipe_id} = req.params
    
     recipesDb.getRecipeById(recipe_id)
     .then(recipes => {
       
         res.json(recipes)
     })
     .catch(err => {
         console.log(err);
         res.send(err)
     })
})




module.exports = router;
