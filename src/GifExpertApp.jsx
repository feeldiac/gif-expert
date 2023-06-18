import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Piece']);

  // // console.log('%c Inicio', `color: gold; 
  // //                           font-weight: bold;
  // //                           font-style: italic;
  // //                           font-size: 18px;`)

  /**
  * 🏂 Updates the 'categories' state adding a new category.
  * Validates if the new category already exists in the 'categories' state.
  * If it does not, adds the new category to the 'categories' at the top of the array.
  * 
  * @param {string} newCategory
  */

  const onAddCategory = (newCategory) => {

    //*TODO: Validate uppercase and lowercase characters

    if (categories.includes(newCategory)) return;
    setCategories(cat => [newCategory, ...cat]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

export default GifExpertApp
