import { CategoryItem } from "./CategoryItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";

export const CategoryList = ({ category }) =>{

    const {images, isLoading} = useFetchGifs(category);
    
    console.log(images);
    return (
        <>
            <p>{category}</p>
            <div className="card-grid">
                {
                    images.map((image) =>{
                        return <CategoryItem 
                        key={ image.id } 
                            { ...image } />
                    })
                }
                {/* <CategoryItem/> */}
            </div>
        </>
    );

}


