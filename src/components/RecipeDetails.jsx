import React, { Component } from "react";
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
  state = {
    recipe:recipe,
    url: `https://www.food2fork.com/api/get?key=e18582eb2dfaf610386513329cb8a06a&rId=${this.props.id}`
  };
  render() {
    const{image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe;
    return <React.Fragment><h1>Hello from details</h1></React.Fragment>;
  }
}
