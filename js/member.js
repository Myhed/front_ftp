window.onload = function(){
    if(typeof localStorage.path === "undefined"){
        window.location.href="file:///home/myhed/Documents/front_ftp/index.html"
    }
    console.log(localStorage.path)
    const ConvertLocalStorageToObject = JSON.parse(localStorage.path)
    ConvertLocalStorageToObject.rootDir.forEach(async (ressource,index) => {
        const ressourcesKnown = await whatTypeRessourcesIsIt(ressource.type,ressource.name)
        createRessourceHtml(ressourcesKnown)
    })
    console.log(localStorage)
}