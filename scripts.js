var usernum;
var calcButton = document.getElementById("half-button");

var username;
var fortButton = document.getElementById("fortune-button");

var cssButton = document.getElementById("css-change");
var cssarray = ["blue","red","green"];
var cssarray2 = ["xx-small","medium","xx-large"];
var cssarray3 = ["normal","italic","oblique"];

function halfNumber(num){
  usernum = document.getElementById("half-input").value;
  console.log("Half of " + usernum + " is " + (usernum/2));
  return alert(usernum/2);
}

calcButton.addEventListener("click", function() {
  halfNumber(usernum);
  }
);

function fortune(name){
  username = document.getElementById("fortune-input").value;
  var cookie = document.createElement('p');
  cookie.innerHTML = username + ", you will be a billionaire tomorrow. :)";
  return document.getElementById("fortune-output").appendChild(cookie);
}

fortButton.addEventListener("click",function(){
  fortune(username);
});

function restyle(){
  document.getElementById("fortune-output").style.color = cssarray[Math.floor(Math.random() * 3)];
  document.getElementById("fortune-output").style.fontSize = cssarray2[Math.floor(Math.random() * 3)];
  document.getElementById("fortune-output").style.fontStyle = cssarray3[Math.floor(Math.random() * 3)];
}

cssButton.addEventListener("click",function(){
  restyle();
});
