import React, { Component } from "react";
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
  state = {
    recipe:recipe,
    url: `https://www.food2fork.com/api/get?key=e18582eb2dfaf610386513329cb8a06a&rId=${this.props.id}`
  };

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe: jsonData.recipe
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const{image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe;

    return (
      <React.Fragment>
     <div className="container">
       <div className="row">
         <div className="col-10 mx-auto col-md-6 my-3">
            <button type="button" className="btn btn-warning mb-5 text-capitalize">Back to recipe list</button>
            <img src={image_url} className="d-block w-100" alt="recipe"/>
         </div>
         <div className="col-10 mx-auto col-md-6 my-3">
           <h6 className="text-uppercase">
              {title}
           </h6>
           <h6 className="text-warning text-capitalize text-slanted">
             provided by {publisher}
           </h6>
           <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">Publisher url</a>
           <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalize">Recipe url</a>
            <ul className="list-group mt-4">
                <h2 mt-3 mb-4>Ingredients</h2>
                {
                  ingredients.map((item,index) => {
                    return(
                      <li key={index} className="list-group-item text-slanted">
                        {item}
                      </li>
                    )
                  })
                }
            </ul>
         </div>
       </div>
     </div>
  </React.Fragment>
  )
}
}
