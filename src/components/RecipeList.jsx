import React, { Component } from 'react'
import { recipes } from "./tempList";

import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';


export default class RecipeList extends Component {

    state = {
        recipes: recipes,
        url:
          "https://www.food2fork.com/api/search?key=e18582eb2dfaf610386513329cb8a06a",
        details_id: 35354
      };

    async getRecipes() {
        try {
          const data = await fetch(this.state.url);
          const jsonData = await data.json();
          this.setState({
            recipes: jsonData.recipes
          });
        } catch (error) {
          console.log(error);
        }
      }
    
      componentDidMount() {
        this.getRecipes();
      }
    
    render() {
        const {recipes} = this.props;
        return (
            <React.Fragment>
            
            <RecipeSearch />
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center 
                    text-uppercase mb-3">
                        <h1 className="text-slanted">Recipe list</h1>

                    </div>

                </div>
                <div className="row">
                    { recipes && 
                        recipes.map(recipe => {
                            return(
                                <Recipe
                                key={recipe.recipe_id}
                                recipe={recipe} />
                            )
                        })
                    }
                </div>

            </div>
           
        </React.Fragment>
        )
    }
}
