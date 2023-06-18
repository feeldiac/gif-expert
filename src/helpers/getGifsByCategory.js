const getGifsByCategory = async ({ category, limit }) => {
    const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
    const API_KEY = '9rba7EshO0XFP4RRuUj4ktkS0kZ0hJvX';

    const url = `${BASE_URL}?api_key=${API_KEY}&q=${category}&limit=${limit}`;

    try {
        const response = await fetch(url);
        const { data } = await response.json();

        if (response.ok) {
            const gifs = data.map(({ id, title, images }) => ({
                id,
                title,
                url: images.downsized_medium.url
            }))

            return gifs;
        }
    } catch (error) {
        console.log(error);
    }
}

export default getGifsByCategory