const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const first = form["firstname"].value;
  const last = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (first === "") {
    addErrorTo("firstname", "First Name cannot be empty");
  } else {
    removeErrorTo("firstname");
  }

  if (last === "") {
    addErrorTo("lastname", "Last Name cannot be empty");
  } else {
    removeErrorTo("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email cannot be empty");
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeErrorTo("email");
  }

  if (password === "") {
    addErrorTo("password", "Password cannot be empty");
  } else {
    removeErrorTo("password");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeErrorTo(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
