// Submit Username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Create a request object
  var request = new XMLHttpRequest();
  
  
  //Capture the response and store it in a variable
  request.onreadstatechange = function () {
    if (request.readyState === XMLHttprequest.DONE){
        //Take some action
        if(request.status === 200){
        console.log('user logged in');
        alert('Logged in successfully');
            } else if  (request.status === 403) {
                alert('Username/password is incorrect');
            } else if(request.status === 500) {
                alert('Something went wrong on the server');
            }
        
    }
       //Not done yet
  };
  //make the request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST','http://nvivek65.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username: username, password: password}));
  // Make the request to the server and send the name 

};