export const getGifs = async(paramCategory) => {

    const url = `https://api.giphy.com/v1/stickers/search?api_key=05d2D8R3NlCjtR6ePivR3RvcaSAszmqm&q=${ paramCategory }&limit=10&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();
    console.log(data)
    const gifs = data.map((img) =>
    ({   
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    
    }
    ));
    return gifs;
}