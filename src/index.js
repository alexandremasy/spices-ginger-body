import { default as GingerHTMLBody } from './body'

export default function({capabilities, options}){

  let body = new GingerHTMLBody([]);
  let current = null;

  capabilities.eventbus.$on('ginger:module:routes', () => {
    const routes = capabilities.store.getters['ginger/routes'];
    body.routes = routes;

    body.guard(current, () => {
      // document.body.classList.add('theme-abc');
    });
  })

  capabilities.router.beforeEach((to, from, next) => {
    current = to;
    body.guard(to, next);
  })

  return {}
}