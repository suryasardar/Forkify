import { async } from "regenerator-runtime";
import { API_URL , Res_Page} from './config';
import { getJson } from "./views/helpers";
export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page:1,
        PerPage:Res_Page,
    },
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJson(`${API_URL}${id}`)
        console.log(data);


        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            cookingTime: recipe.cooking_time,
            title: recipe.title,
            publiser: recipe.publiser,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            ingredients: recipe.ingredients,
        }
        // console.log(state.recipe)
    } catch (err) {
        console.log(`${err}`)
        throw (err);
    }

};

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJson(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.results = data.data.recipes.map(rec => {
            return {

                id: rec.id,
                title: rec.title,
                publiser: rec.publiser,
                image: rec.image_url,

            };

        });
        //  console.log(state.search.results);
    } catch (err) {
        console.log(`${err}`)
        throw (err);
    }
};

export const searchPerPage= function(page = state.search.page){
    state.search.page=page;
     
    const start = (page-1) *state.search.PerPage;
    const end= page*state.search.PerPage;
    // console.log(state.search.PerPage);
    console.log(page);
    console.log(start, end);
    return state.search.results.slice(start,end);
};

export const updateservings= function (newServings){
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity* newServings)/state.recipe.servings;
        // newqt = oldqt*newservings/holeservings
    });
    state.recipe.servings = newServings;
};
 