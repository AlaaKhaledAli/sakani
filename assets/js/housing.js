const loginBTN = document.getElementById('loginBTN');
const adminPage=document.getElementById('adminPage');
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
let posts;
if (localStorage.dataObj != null) {
  posts = JSON.parse(localStorage.dataObj);
} else {
  posts = [];
}
const postsCntainer = document.getElementById("postsContainer");

function displayPosts() {
    postsCntainer.innerHTML = "";
    posts.forEach((post, index) => {
        postsCntainer.innerHTML += `
                                <div class="col-6">
                            <div class="card ">
                                <img src="assets/img/WhatsApp Image 2025-12-26 at 4.08.02 PM.jpeg" class="card-img-top"
                                    alt="...">
                                <div class="card-body">


                                    <p class="card-title">كم بعد الجامعه الاسكندريه 2.3</p>
                                    <p class="card-text">${post.address}</p>


                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h6 id="buy">${post.price} جنيه </h6>
                                            <p>شهريا</p>
                                        </div>

                                        <button class="btn btn-primary" onclick="openPost(${index})"
                                                style="color: white; text-decoration: none; font-weight: 400;">عرض
                                                التفاصيل</button>

                                    </div>

                                </div>
                            </div>

                        </div>
        `;
})
}
displayPosts();

const openPost=(ind)=>{
    window.location.href=`post.html?postIndex=${ind}`;
}
