let MovieComp = {
  template: `


      <div class="card">
      
        <img class="card-img-top" :src="cover | coverURL">
          <div class="card-body">
            <h2 class="card-title" v-text="title"></h2>
            <p class="card-text" v-text="synopsis"></p>
          </div>
    
      </div>


  `,

  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      default: 'No posee Si nopsis'
    },
    cover: {
      type: String,
      required: true
    }
  }
}
