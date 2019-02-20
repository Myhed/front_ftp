window.onload = function(){
    if(localStorage.path.trim() === ''){
        window.location.href="file:///home/myhed/Documents/front_ftp/index.html"
    }

    const ConvertLocalStorageToObject = JSON.parse(localStorage.path)
    ConvertLocalStorageToObject.rootDir.forEach((ressource,index) => {
        const ressourcesKnown = whatTypeRessourcesIsIt(ressource.type,ressource.name)
        
    })
    
}