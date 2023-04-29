// import { isInteger } from 'core-js/core/number';
import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeview from './views/recipeview.js';
import searchView from './views/searchview.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import resultsview from './views/resultsview.js';
import paginationview from './views/paginationview.js';
// console.log(icons);
 



//forkify-api.herokuapp.com/v2

///////////////////////////////////////
  if(module.hot){
    module.hot.accept();
  }


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
  resultsview.renderspinner();
//   //1 get search query
  const query = searchView.getQuery();
  // console.log(query);
  if(!query) return;
//   //2 load searh results
await model.loadSearchResults(query);
// //3 render results
// console.log(model.state.search.results);
resultsview.render(model.searchPerPage(1));
// render initial pagination button
paginationview.render(model.state.search);

}catch(err){
  console.log(err)
}
};
// controlSearchResults();
const controlPagination = function(goToPage){
  //render new results
  resultsview.render(model.searchPerPage(goToPage));
  //render new pagination buttons
  paginationview.render(model.state.search);
};
const controlServings = function(newServings){
  //update the recipe servings (in state)
  model.updateservings(newServings);
  //update the recipe view
  recipeview.render(model.state.recipe);
}

const init= function(){
  recipeview.Handlerrender(controlRecipes);
  recipeview.addHandlerServings(controlServings);
  searchView.HandlerSearch(controlSearchResults);
  paginationview.addHandlerclick(controlPagination);
 
};
init();



