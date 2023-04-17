const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstName = fname.value.trim();
  let lastName = lname.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (firstName === "") {
    setError(fname, "First name is required.");
  } else {
    setSuccess(fname);
  }

  if (lastName === "") {
    setError(lname, "Last name is required.");
  } else {
    setSuccess(lname);
  }

  if ((emailValue = "")) {
    setError(email, "Email is required.");
  } else if (!emailValue.match(pattern)) {
    setError(email, "Try a valid email.");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required.");
  } else {
    setSuccess(password);
  }
});

function setError(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className += "error";
  span.className += "error-text";
  if (req !== email) {
    req.value = " ";
  } else {
    req.style.color = "hsl(0, 100%, 74%)";
  }
}

const setSuccess = (req) => {
  req.className += "success";
};
