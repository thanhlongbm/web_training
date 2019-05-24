import "./index.css"
import "./mx.css"
import riot from "riot";
import "./tags/signin.tag";
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

// mxFirebase.init(firebaseConfig);

route.base("/");
route("/signin" , async() => {
    riot.mount("#signinpos" , "signin");
    // await mxFirebase.signIn("aa","aa");
});

route.start(true);

var signinBtn = document.querySelector(".sign_in_btn");
var email = document.getElementsByName('email');
var pass = document.getElementsByName('pass');

console.log(signinBtn);



