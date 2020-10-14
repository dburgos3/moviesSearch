let DirectiveIf = {
  template: `<div> 
              <h1 v-text="title"></h1>
              <p v-if="show" v-html="message"></p>
              <h1>Uso de v-if / v-else</h1>
              <p v-if="user.permission">El  usuario tiene permiso de ver esto</p>
              <p v-else>El usuario no tiene permiso de ver esto</p>
              <h1>Uso de v-if / v-else-if / v-else</h1>
              <p v-if="user.permission && user.vp">El  usuario tiene permiso y es VIP</p>
              <p v-else-if="user.permission">El  usuario tiene permiso</p>
              <p v-else-if="user.vip">El  usuario es vip</p>
              <p v-else>El usuario no tiene permisos ni es VIP</p>
            </div>`,
  data() {
    return {
      title: 'Directivas v-if',
      message: '<b>Hola desde directive v-if</b>',
      show: true,
      user: {
        permission: false,
        vip: true
      }
    }
  }
}
