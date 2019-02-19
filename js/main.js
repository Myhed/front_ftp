window.onload = function(){
    const request = new XMLHttpRequest();

    request.open("POST","http://localhost:3000/", false);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("host=localhost&user=Myhed&password=Myhed92600");

    
    request.open("GET","http://localhost:3000/",false)

    request.send()

    console.log(request)

}