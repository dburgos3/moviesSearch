const APIKEY = '8083c37a961c8e74b263cf11d0582952'
const BaseURL = 'https://api.themoviedb.org/3/'

Vue.component('movie-app', {
  template: `
  
            <div class="container" style="margin-top: 10%; margin-left: 2%; margin-right: 2%;">
              <h1>Movies</h1>

              <div class="row">  
                <SearchComp v-model="searchMovies"/>
              </div>

              <div class="row">
                
                <div class="col-4">
                  <FiltersComp/>
                </div>
                

                <div class="col-8">

                  <div v-show="!Object.keys(searchMovies).length">  

                    <div class="row">
                      <div class="col-12 col-sm-8 col-md-6 col-lg-5" v-for="(movie, key) in movies" 
                      :key="key"" >
                        <MovieComp  
                        :id="movie.id" 
                        :title="movie.title" 
                        :synopsis="movie.overview" 
                        :cover="movie.poster_path"/>
                      </div>
                    </div>
                    
                  </div>

                  <div v-show="Object.keys(searchMovies).length">
                  
                    <div class="row">
                    <div class="col-12 col-sm-8 col-md-6 col-lg-5" v-for="(movie, key) in searchMovies.results" 
                    :key="key"" 
                    v-if="movie.poster_path">
                      <MovieComp  
                      :id="movie.id" 
                      :title="movie.title" 
                      :synopsis="movie.overview" 
                      :cover="movie.poster_path"/>
                    </div>

                </div>

                  </div>

                </div>

              </div>
            </div>
            `,
  data() {
    return {
      movies: [],
      searchMovies: {},
      page: 0,
      total_pages: null
    }
  },
  components: {
    MovieComp,
    SearchComp,
    FiltersComp
  },

  methods: {
    getPopularMovies() {
      const URL = `${BaseURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.total_pages}`
      fetch(URL)
        .then(response => response.json())
        .then(({ results, page, total_pages }) => {
          console.log(page, total_pages)
          this.movies = results.map(m => {
            return m
          })
        })
    },

    getTopratedMovies() {
      const URL = `${BaseURL}discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${APIKEY}&page=${this.page}`
      fetch(URL)
        .then(response => response.json())
        .then(({ results, page, total_pages }) => {
          console.log(page, total_pages)
          this.movies = results.map(m => {
            m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
            return m
          })
        })
    },

    getUpNowInTheatresMovies() {
      const URL = `${BaseURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${APIKEY}&page=${this.page}`
      fetch(URL)
        .then(response => response.json())
        .then(({ results, page, total_pages }) => {
          console.log(page, total_pages)
          this.movies = results.map(m => {
            m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
            return m
          })
        })
    }
  },

  mounted() {
    let locationURL = new URL(window.location.href)
    this.page = locationURL.searchParams.get('page')
    this.getPopularMovies()
  }
})
