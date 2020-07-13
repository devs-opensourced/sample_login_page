console.log("Login script added");
var baseUrl = 'https://baseurl.com';

function validateform() {
    var userName = document.login_form.username.value;
    var password = document.login_form.password.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    let loginData = {username: userName, password: password};
    serverCall('POST', '/login', loginData, (res)=>{
        console.log(res);
    })

}

function serverCall(method, url, body, callback){
    var xhr = new XMLHttpRequest();
    xhr.open(method, baseUrl + '/' + url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function(event){
        alert("Success, server responded with: " + event.target.response); // raw response
        callback(event.target.response)
    };
    // or onerror, onabort
    xhr.send(body);
}

