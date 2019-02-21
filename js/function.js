function getHomeDirectory(){
    request.open("GET","http://localhost:3000/", false)
    request.send()
}

async function whatTypeRessourcesIsIt(Ressource,name){
    const regex = /^d/
    let icon = ''
    let RessourcesTypeFound = {};
    return new Promise((resolve, reject) => {
        if(Ressource.match(regex)){
            icon = 'file:///home/myhed/Documents/front_ftp/img/Folder-icon.png';
        }else{
            icon = 'file:///home/myhed/Documents/front_ftp/img/file-icon.png';
        }
        RessourcesTypeFound = Object.assign({Ressource:icon,RessourceName:name})
        resolve(RessourcesTypeFound);
    })
    
}

function displayError(message){
    const error = document.querySelector(".error");
    const errorText = document.querySelector(".error .text");
    const messageNode = document.createTextNode(message)
    error.classList.add('error-display');
    errorText.classList.add('text-display');
    setTimeout(() => {
        errorText.appendChild(messageNode)
        errorText.classList.add("text-display-opacity")
    })
}

async function createRessourceHtml(ressourcesKnown={}){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img')
    const container = document.querySelector("#container > .list")
    const ressourceText = document.createTextNode(ressourcesKnown.RessourceName)
    a.setAttribute("href","");
    img.setAttribute("src",ressourcesKnown.Ressource)
    img.setAttribute("width","25");
    a.appendChild(img);
    a.appendChild(ressourceText);
    li.appendChild(a);
    container.appendChild(li);
}