let DirectiveShow = {
  template: `<div> 
              <h1 v-text="title"></h1>
              <p v-show="show" v-html="message"></p>
              <p v-show="user.permission">El usuario tiene permiso de ver esto</p>
              <p v-show="!user.permission">El usuario no tiene permiso de ver esto</p>
            </div>`,
  data() {
    return {
      title: 'Directivas v-show',
      message: '<b>Hola desde directive v-show</b>',
      show: true,
      user: {
        permission: false
      }
    }
  }
}
