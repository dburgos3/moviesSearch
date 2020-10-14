let SearchComp = {
  template: `
      <div>
        <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="row">
            <form  @submit.prevent="search" class="form-inline md-form form-sm mt-0">
                    <div  class="input-group mb-3">
                      <input type="text" v-model="query" class="form-control" placeholder="Movie Name" aria-label="Search's username" aria-describedby="button-addon2" >
                      <div class="input-group-append">
                        <button @click="search" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                      </div>
                    </div>
              </form>
            </div> 
          </div>
        </nav>
      </div>
  `,
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      let URL = `${BaseURL}search/movie?api_key=${APIKEY}&query=${this.query}&page=${this.page}`

      fetch(URL)
        .then(res => res.json())
        .then(data => {
          this.$emit('input', data)
        })
    }
  }
}
