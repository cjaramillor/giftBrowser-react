import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs(category).then(img =>{
            setimages(images.concat(img));
        });
    }, []);
    return {
        images,
        isLoading: true
    }

}
