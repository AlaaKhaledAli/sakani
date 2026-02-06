
const loginBTN = document.getElementById('loginBTN');
const adminPage = document.getElementById('adminPage');

adminPage.onclick=isLoggedin

function isLoggedin(){

  localStorage.getItem("loggedIn")?window.location.href='addpost.html':window.location.href='login.html';

}

localStorage.getItem("loggedIn")?loginBTN.innerText="تسجيل خروج":loginBTN.innerText="تسجيل دخول";

loginBTN.onclick = checkLoginStatus;

function checkLoginStatus() { 

  if(loginBTN.innerText==="تسجيل خروج"){

    localStorage.removeItem("loggedIn")

loginBTN.innerText="تسجيل دخول"

  }else{

  window.location.href = "login.html";

  }
}

let search=document.getElementById('search');

search.onclick=function(){

  let typeofhosing=document.getElementById('typeofhousing').value;
  let city=document.getElementById('city').value;
  window.location.href='housing.html?typeofhosing='+typeofhosing+'&city='+city;

}
