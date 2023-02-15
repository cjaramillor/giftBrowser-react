import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputCategory, setinputCategory] = useState('');

    const onChangeInputCategory = (event) =>{
        // trae la nueva categoria 
        setinputCategory(event.target.value);
    }

    const onKeyAddCategory = (event) => {
        if (event.key === 'Enter') {
            //valida que alla almenos un caracter
            if(inputCategory.trim().length <= 1) return;
            
            //envia el nuevo valor al componente padre para la insercion
            onNewCategory(inputCategory);
            //seta a blanco el input categoria
            setinputCategory('');
          }
        
    }
    

    return (
        <>
            <input 
            type='text'
            placeholder="Buscar gif's"
            value={inputCategory}
            onChange={(event) => onChangeInputCategory(event)}
            onKeyDown = { (event) => onKeyAddCategory(event) }
            ></input>
    
        </>
    );
    
  
  }