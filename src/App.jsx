import React, { Component } from "react";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends Component {
  

  

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/recipes" recipes={this.state.recipes} component={RecipeList} />
          <RecipeList  />
          <RecipeDetails id={this.state.details_id} />
        </Switch>
      </BrowserRouter>
    );
  }
}
