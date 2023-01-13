
var login = true;



function validate(){
    var username=document.getElementById ("email").value;
    var password=document.getElementById("passwort").value;
    if(username == "demirv" && password == "bzzlp123" || username == "sutera" && password == "bzzsus123" ){
        alert("login successfully");
        window.location = "http://localhost:63342/modul-288/html/landingpage.html?_ijt=ljpsucs2r4e315da8m6ahho3vv&_ij_reload=RELOAD_ON_SAVE";
    }

    else{
        alert("login failed");
        login = false;
    }
}

//Definierte User als Klassen:


class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }


    daten() {
        console.log(`Username ${this.username} und dazugehöriges Passwort: ${this.password} `);
    }
}

var user1 = new User("sutera", "bzzsus123");
user1.daten();

var user2 = new User("demirv", "bzzlp123");
user2.daten();



/*
Object-literal:

var credentials = {
    username: "sutera",
    password: "bzzsus123",
};

var userInputUsername = prompt("Please enter your username:");
var userInputPassword = prompt("Please enter your password:");

if (userInputUsername === credentials.username && userInputPassword === credentials.password) {
    console.log("Access granted!");
} else {
    console.log("Access denied!");
}


 */








/*
if(username =="demirv" && password =="bzzlp123" || username =="sutera" && password =="bzzsus123" ){
    function goToPage() {
        window.location = "http://localhost:63342/modul-288/landingpage.html?_ijt=argrqkqul2eq88cgirevk5cogd&_ij_reload=RELOAD_ON_SAVE";
    }
}

/*
if (login == true) {
    function goToPage(url) {
        window.location = url;

    }
}


s
/*


if login ==true{
    function goToPage('http://localhost:63342/modul-288/landingpage.html?_ijt=argrqkqul2eq88cgirevk5cogd&_ij_reload=RELOAD_ON_SAVE;') {
        window.location = (url);

    }

}










/*var submitLogin = null;
var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 650,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 650,
            easing: 'easeOutQuart'
        }
    });

});
document.querySelector('#password').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            easing: 'easeOutQuart',
            duration: 650,

        },
        strokeDasharray: {
            easing: 'easeOutQuart',
            value: '240 1386',
            duration: 650,

        }
    });
});
document.querySelector('#submit').addEventListener('focus', function(e) {

    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -730,
            easing: 'easeOutQuart',
            duration: 700,

        },
        strokeDasharray: {
            easing: 'easeOutQuart',
            value: '530 1386',
            duration: 700,

        }
    });
});

let inputElt = document.getElementById('input');
let btn = document.getElementById('button');

inputElt.addEventListener("input", function(){
    btn.disabled = (this.value === '');
})

const loginBtn = document.querySelector("#submit")

btn.onsubmit( )

var submitLogin = function() {
    let email = document.querySelector("#email")
    let password = document.querySelector("#passwort")

    if (email.Value == "admin@google.com" && password.Value == "admin1234") {
         window.location.protocol = http://localhost:63342/modul-288/landingpage.html?_ijt=a0e81j4ebu67qu7uoamgfj99gb&_ij_reload=RELOAD_ON_SAVE
    }

}

/**
const button = document.getElementById('submit')
// Disable the selected button in JavaScript based on a condition
// If the button text is 'Can you click me?'
if (button.innerText === 'submit') {
    button.disabled = true
}
 **/