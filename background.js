export function bgPages(){

    function backgroundPageHome () {
        let homeBack = document.querySelector('.home')
        homeBack.addEventListener('click',function(){
        document.querySelector('body').classList.remove("universe-background")
        document.querySelector('body').classList.remove("exploration-background ")
    })
}
    function backgroundPageUniverse () {
        let universeBack = document.querySelector('.universe')
        universeBack.addEventListener('click',function(){
        document.querySelector('body').classList.add("universe-background")
        document.querySelector('body').classList.remove("exploration-background ")
    })
}
    function backgroundPageExploration () {
        let explorationBack = document.querySelector('.exploration')
        explorationBack.addEventListener('click',function(){
        document.querySelector('body').classList.remove("universe-background")
        document.querySelector('body').classList.add("exploration-background ")
    })
}

    return {backgroundPageHome, backgroundPageUniverse, backgroundPageExploration}
}