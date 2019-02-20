function getHomeDirectory(){
    request.open("GET","http://localhost:3000/", false)
    request.send()
}

function whatTypeRessourcesIsIt(Ressource,name){
    const regex = /^d/
    let icon = ''
    let RessourcesTypeFound = {};
    if(Ressource.match(regex)){
        icon = 'folder';
    }else{
        icon = 'file';
    }
    RessourcesTypeFound = Object.assign({Ressource:icon,RessourceName:name})
    return RessourcesTypeFound;

}