import { Router } from "./router.js"

const router = new Router()

   router.add("/home", "/pages/home.html",)
    router.add("/exploration", "/pages/exploration.html",)
    router.add("/universe", "/pages/universe.html",)
    router.add(404, "/pages/404.html",)

    router.handle()

    window.onpopstate = () => router.handle()
    window.route = () => router.route()

/*const routes = {
    "/home": "/pages/home.html",
    "/exploration": "/pages/exploration.html",
    "/universe": "/pages/universe.html",
    404: "/pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefaut()

    window.history.pushState({}, "", event.target.href)

    this.handle()
}

function handle(){
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#begin').innerHTML = html
    })
}

handle()*/
   
    /*function bodyClass() {
        let teste = document.querySelector('body')
        teste.classList.add()
        
        }*/
    

    function backgroundPageUniverse () {
        let universeBack = document.querySelector('.universe')
        universeBack.addEventListener('click',function(){
        document.querySelector('body')
        universeBack.classList.add("universe-background")
        document.querySelector('body')
        universeBack.classList.remove("exploration-background")
    })
}
    function backgroundPageExploration () {
        let explorationBack = document.querySelector('.exploration')
        explorationBack.addEventListener('click',function(){
        document.querySelector('body').classList.remove("universe-background")
        document.querySelector('body').classList.add("exploration-background")
    })
}

    function backgroundPageHome () {
    let homeBack = document.querySelector('.home')
  
    homeBack.addEventListener('click',function(){
    document.querySelector('body').classList.remove("universe-background")  
    
    document.querySelector('body').classList.remove("exploration-background")
})
}
    bodyClass()
    backgroundPageHome()
    backgroundPageUniverse()
    backgroundPageExploration()



