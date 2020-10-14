Vue.component('vue-directives', {
  template: `<div> 
              <h1 v-text="title"></h1>
              <p v-text="text"></p>
              <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
              <DirectiveHtml/>
              <DirectiveShow/>
              <DirectiveIf/>
            </div>
            `,
  data() {
    return {
      title: 'Directivas de Vue.js',
      text: 'Texto de prueba',
      link: {
        text: 'VueJS Home',
        href: 'https://vuejs.org/',
        title: 'Documentación Vue JS'
      }
    }
  },

  components: {
    DirectiveHtml,
    DirectiveShow,
    DirectiveIf
  }
})
