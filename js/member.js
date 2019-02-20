window.onload = function(){
    if(localStorage.path.trim() === ''){
        window.location.href="file:///home/myhed/Documents/front_ftp/index.html"
    }

    const ConvertLocalStorageToObject = JSON.parse(localStorage.path)
    ConvertLocalStorageToObject.rootDir.forEach(async(ressource,index) => {
        const ressourcesKnown = await whatTypeRessourcesIsIt(ressource.type,ressource.name)
        createRessourceHtml(ressourcesKnown)
    })
    console.log(localStorage)
}