const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY
    }

});


async function getTrendingMoviesPreview(){
    // const res = await api('/trending/movie/day')

    const {data} = await api('/trending/movie/day')
    
    // const data = await res.json()
    

    const movies = data.results;
    
    movies.forEach(movie => {
        const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList')

        
        
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')
        
        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path)
        
        
        movieContainer.appendChild(movieImg)
        
        
        trendingMoviesPreviewList.appendChild(movieContainer)

        
    });
}


async function getCategoriesMoviesPreview(){
    // const res = await api('/genre/movie/list')
    const {data} = await api('/genre/movie/list')

    // const data = await res.json()



    const categories = data.genres;
    
    categories.forEach(categori => {
        const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list')

        
        
        const categorieContainer = document.createElement('div')
        categorieContainer.classList.add('category-container')
        
        const categorieTitle = document.createElement('h3')
        categorieTitle.classList.add('category-title')
        categorieTitle.setAttribute('id', 'id'+categori.id)
        
        const categoriaTitleText = document.createTextNode(categori.name)
        
        
        categorieTitle.appendChild(categoriaTitleText)
        categorieContainer.appendChild(categorieTitle)
        
        
        categoriesPreviewList.appendChild(categorieContainer)

        
    });
}

