export class Router {
    routes = {}
    add(routeName, page){ this.routes[routeName] = page }

    route(event) {
    event = event || window.event
    event.preventDefaut()

    window.history.pushState({}, "", event.target.href)

    this.handle()
    }

    handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => { document.querySelector('#begin').innerHTML = html })
    }
}