let username = document.querySelector(".container form #username");
let email = document.querySelector(".container form #email");
let birth = document.querySelector(".container form #birth-date");
let subBtn = document.querySelector(".container form .btn");

subBtn.addEventListener("click", function (eve) {
    eve.preventDefault();

    let userReg = /^\w{3,}\s\w{3,}$/gi.test(username.value);
    let emailReg = /^[\w|\.|-]{2,}@\w{2,}\.\w{2,}$/gi.test(email.value);
    let birthReg = /^\d{4}\/\d{2}\/\d{2}$/gi.test(birth.value);
    if (userReg === true && emailReg === true && birthReg === true) {
        console.log("suc");
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
        });
    }
});
