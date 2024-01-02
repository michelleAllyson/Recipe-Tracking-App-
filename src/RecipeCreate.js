import React, { useState } from "react";

function RecipeCreate( {createRecipe}) {

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    createRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                type="text" 
                placeholder="Name"
                value={name} 
                onChange={handleNameChange} 
              />
            </td>
            <td>
              <input 
                name="cuisine"
                type="text" 
                placeholder="Cuisine"
                value={cuisine}    
                onChange={handleCuisineChange} 
              />
            </td>
            <td>
              <input 
                name="photo"
                type="url" 
                placeholder="URL"
                value={photo}    
                onChange={handlePhotoChange} 
              />
            </td>
            <td>
              <textarea 
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}    
                onChange={handleIngredientsChange} 
              />
            </td>
            <td>
              <textarea 
                name="preparation"
                placeholder="Preparation"
                value={preparation}    
                onChange={handlePreparationChange} 
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
