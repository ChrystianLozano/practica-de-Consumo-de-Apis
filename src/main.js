async function getTrendingMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)

    const data = await res.json()

    const movies = data.results;
    
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        
        
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')
        
        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path)
        
        
        movieContainer.appendChild(movieImg)
        
        
        trendingPreviewMoviesContainer.appendChild(movieContainer)

        
    });
}


async function getCategoriesMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY)

    const data = await res.json()

    console.log({data})

    const categories = data.genres;
    
    categories.forEach(categori => {
        const PreviewCategoiresContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

        
        
        const categorieContainer = document.createElement('div')
        categorieContainer.classList.add('category-container')
        
        const categorieTitle = document.createElement('h3')
        categorieTitle.classList.add('category-title')
        categorieTitle.setAttribute('id', 'id'+categori.id)
        
        const categoriaTitleText = document.createTextNode(categori.name)
        
        
        categorieTitle.appendChild(categoriaTitleText)
        categorieContainer.appendChild(categorieTitle)
        
        
        PreviewCategoiresContainer.appendChild(categorieContainer)

        
    });
}

getCategoriesMoviesPreview()
getTrendingMoviesPreview()