import "./index.css"
import "./mx.css"
import riot from "riot";
import "./tags/signin.tag";
import "./tags/upload.tag";
import route from "riot-route";
import {mxFirebase} from "./mx";
import { callbackify } from "util";

var firebaseConfig = {
    apiKey: "AIzaSyBBMYrngoovMqlCEiGa0UVE2x6qhwODtl4",
    authDomain: "code-camp-demo.firebaseapp.com",
    databaseURL: "https://code-camp-demo.firebaseio.com",
    projectId: "code-camp-demo",
    storageBucket: "code-camp-demo.appspot.com",
    messagingSenderId: "451894847947",
    appId: "1:451894847947:web:a269012f9aa8fe89"
  };

mxFirebase.init(firebaseConfig);

var email_err = "Missing Email";
var pass_err = "Missing Password";
var signIn_err = "Wrong email or password. Please try again!";

route.base("/");
route("/signin" , async() => {
    riot.mount("#mainpos" , "signin");
    var signinBtn = document.getElementById("sign_in_btn");
    var signIn_err_text = document.getElementById("signin_error");

    signinBtn.addEventListener('click' , async function(e){
      var cur = e.target;
      var email_list = document.getElementsByName('email');
      var pass_list = document.getElementsByName('pass');
      var email = email_list[0];
      var pass = pass_list[0];
      if(email.value == "") signIn_err_text.innerText = email_err; 
      else if(pass.value == "") signIn_err_text.innerText = pass_err; 
      else
      try {
        await mxFirebase.signIn(email.value , pass.value); 
        window.location.href = "http://localhost:8080";
      } catch (error) {
        signIn_err_text.innerText = signIn_err;
      }
    });
});

route("/upload" , async () => {
  riot.mount("#mainpos" , "upload");

  var sellBtn = document.getElementById("sell_btn");
  var upload_error = document.getElementById("upload-error");
  var title_error = "Missing Title";
  var price_error = "Missing Price";
  var file_error = "Missing Photos";
  var emo_error = "Missing Emotion";

  sellBtn.addEventListener('click' , function(e){
    var emo_list = document.getElementsByName("emo-radio");
    var emotion = "";
    for(var i = 0 ; i < emo_list.length ; i++){
      if(emo_list[i].checked) emotion = emo_list[i].id;
    }
    
    var title = document.getElementsByName("selling_goods_title")[0];
    var image = document.getElementsByName("productImage");
    var price = document.getElementsByName("selling_goods_price")[0];
    var category = document.getElementById("selling_category");
    var what = document.getElementById("what_selling");
    var why = document.getElementById("why_selling");

    if(emotion == "") upload_error.innerText = emo_error;
    else if(title.value == "") upload_error.innerText = title_error;
    else if(price.value == "") upload_error.innerText = price_error;
    else{
      
    }

  });  
});

route.start(true);



