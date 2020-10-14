let FiltersComp = {
  template: `
      <div>
      <div class="col">

      
      <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Filter By</div>
      <div class="card-body">
      
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">Popular,</button>
              <button class="dropdown-item" type="button">Top Rated</button>
              <button class="dropdown-item" type="button">Upcoming</button>
            </div>
        </div>
        
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h6 class="card-title">Gender</h6>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled>
              <label class="custom-control-label" for="customCheckDisabled1">Action</label>
            </div>
          </li>
        </ul>
            
          </div>
        </div>
      </div>

      </div>

        
      </div>
  `,
  data() {
    return {}
  }
}
