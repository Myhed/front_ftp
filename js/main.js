const request = new XMLHttpRequest();
function connectToTheServer(options = {}){
    request.open("POST","http://localhost:3000/", false);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(`host=${options.host}&user=${options.user}&password=${options.password}`);
    return request;
}

window.onload = function(){
    if(typeof localStorage.path !== "undefined" && localStorage.path.trim() !== ''){
        window.location.href="file:///home/myhed/Documents/front_ftp/member.html"
    }
    const form = document.querySelector("#form");
    const keys = ["host","user","password"]
    const input = document.querySelectorAll('form > input[type="text"], input[type="password"]');
    form.addEventListener("submit",(e) => {
         serverResponse = connectToTheServer({host:input[0].value,user:input[1].value, password:input[2].value});
         localStorage.setItem('path',serverResponse.responseText);
         window.location.href="file:///home/myhed/Documents/front_ftp/member.html"
        e.preventDefault();
    })
    console.log(localStorage)

}   