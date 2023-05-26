let userName = document.querySelector("#YourName");
let email = document.querySelector("#YourEmail");
let password = document.querySelector("#Password");
let confPassword = document.querySelector("#ConfirmPassword");
let signUp_btn = document.querySelector(".button");
let error = document.querySelector(".error");

// Sign up button
signUp_btn.addEventListener("click", (e) => {
    if (
        userName.value == "" ||
        email.value == "" ||
        password.value == ""
    )
        return (error.innerText = `* Please fill all inputs`);

    // Email & password validation
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
        return (error.innerText = "* Please enter a valid email");

    if (password.value.length < 8)
        return (error.innerText = `* Your password must have at least 8 characters`);

    if (password.value !== confPassword.value)
        return (error.innerText = `* Your password does not match the confirm password`);

    let usersArr = JSON.parse(localStorage.getItem("users")) || [];

    let user = {
        userName: userName.value,
        email: email.value,
        password: password.value,
        df: false,
        techFlag: false,
        englishFlag: false,
        userInfo: {
            first_Name: "",
            birth_day: null,
            address: null,
            phone: null,
        },
        englishScore: null,
        techScore: null,
    };

    const isExist = usersArr.find((ele) => ele.email === user.email);
    if (isExist) return (error.innerText = `Email already exists`);

    usersArr.push(user);
    localStorage.setItem("users", JSON.stringify(usersArr));

    // Move to login page after signup
    setTimeout(() => {
        window.location.href = "login.html";
    }, 100);

    e.preventDefault();
});
