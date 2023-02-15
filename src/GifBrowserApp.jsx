import { useState } from "react";
import { AddCategory,CategoryItem, CategoryList } from "./components";


export const GifBrowserApp = () => {

  const [categories, setCategories] = useState(['random'])

  const onKeyAddCategory = (cat) => {
    //valida que ya exista el elemento por incluir
    if(categories.includes(cat)) return;

    setCategories([]);

    setCategories(lstCategories => [...lstCategories,cat]);
}


  return (
    <>
    <h2>GifBrowserApp</h2>
    <AddCategory onNewCategory = { cat =>  onKeyAddCategory(cat)}></AddCategory>

    {
        categories.map((category) =>
          {
          return (<CategoryList key={category} category={category} />);
                   
          })
    }
    

      
    </>
    
  );
}


