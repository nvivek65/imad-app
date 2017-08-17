//Counter Code
var button = document.getElementById('counter');
button.onclick = function () {
  //Create a request object
  var request = new XMLHttpRequest();
  
  
  //Capture the response and store it in a variable
  request.onreadstatechange = function () {
    if (request.readyState === XMLHttprequest.DONE){
        //Take some action
        if(request.status === 200){
            var counter = request.responseText
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        
    }
       //Not done yet
  };
  //make the request
  request.open('GET','http://nvivek65.imad.hasura-app.io/counter',true);
  request.send(null);
  
};

// Submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Create a request object
  var request = new XMLHttpRequest();
  
  
  //Capture the response and store it in a variable
  request.onreadstatechange = function () {
    if (request.readyState === XMLHttprequest.DONE){
        //Take some action
        if(request.status === 200){
        // Capture the list of names and render it as a list.
  var names = request.responseText;
  names =JSON.parse(names);
  var list = '';
  for(var i=0;i<names.length;i++){
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
                    }
        
    }
       //Not done yet
  };
  //make the request
  request.open('GET','http://nvivek65.imad.hasura-app.io/subit-name?name=' + name,true);
  request.send(null);
  // Make the request to the server and send the name 
  
  
  
};