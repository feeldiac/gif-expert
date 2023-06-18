import { useState, useEffect } from 'react';
import { getGifsByCategory } from "../helpers";
export const useGetGifs = ({ category, limit }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifs = await getGifsByCategory({ category, limit });
        setImages(gifs);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
