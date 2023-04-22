// import { isInteger } from 'core-js/core/number';
import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeview from './views/recipeview.js';
import searchView from './views/searchview.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime'
// console.log(icons);
 



//forkify-api.herokuapp.com/v2

///////////////////////////////////////
  


const controlRecipes = async function(){
  //loading a recipe
  try{
 
    const id = window.location.hash.slice(1);
    console.log(id);
    if(!id) return;
    recipeview.renderspinner( );
   await model.loadRecipe(id);
  //  const {recipe} =model.state;
  //  console.log(recipe);
  
 //rendering a recipe
 recipeview.render(model.state.recipe);
 

}catch(err){
recipeview.renderError();

}
};
// showRecipe();
 
// window.addEventListener('hashchange',showRecipe);
// window.addEventListener('load',showRecipe);

const controlSearchResults=async function(){
try{
//   //1 get search query
  const query = searchView.getQuery();
  // console.log(query);
  if(!query) return;
//   //2 load searh results
await model.loadSearchResults(query);
// //3 render results
console.log(model.state.search.results);

}catch(err){
  console.log(err)
}
};
// controlSearchResults();

const init= function(){
  recipeview.Handlerrender(controlRecipes);
  searchView.HandlerSearch(controlSearchResults);
};
init();



