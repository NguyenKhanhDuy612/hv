// let clickSubmit = document.getElementById("clickSubmit");

// let firstName = document.getElementById("firstName");
// let lastName = document.getElementById("lastName");
// let email = document.getElementById("email");
// let phoneNumber = document.getElementById("phoneNumber");
// let city = document.getElementById("city");
// let state = document.getElementById("state");

// // check rỗng
// showError = (input, message) => {
//   console.log("input.parentElement", input.parentElement);
//   let parent = input.parentElement;
//   let small = parent.querySelector("small");
//   console.log("small", small);
//   parent.classList.add("error");
//   small.innerText = message;
// };

// showSuccess = (input) => {
//   let parent = input.parentElement;
//   let small = parent.querySelector("small");
//   parent.classList.remove("error");
//   small.innerText = "";
// };

// checkEmptyError = (listInput) => {
//   let isEmptyError = false;
//   let ms = "Không dduocj để trống"
//   listInput.forEach((input) => {
//     input.value = input.value.trim();

//     if (!input.value) {
//       showError(input, ms);
//     } else {
//       showSuccess(input);
//     }
//   });

//   return isEmptyError;
// };

// clickSubmit.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let isEmptyError = checkEmptyError([firstName, lastName, email]);
// });

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let city = document.getElementById("city");
let state = document.getElementById("state");

// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let cfpassword = document.getElementById("cfpassword");

// let email = document.getElementById("email");

let submit = document.getElementById("submit");
let form = document.getElementById("form");

// check rỗng
showError = (input, message) => {
  console.log("input.parentElement", input.parentElement);
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
};

showSuccess = (input) => {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
};

checkEmptyError = (listInput) => {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      showError(input, "This field is required.");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
};

// kiểm tra email
checkEmail = (input) => {
  const regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  input.value = input.value.trim();

  let isEmailError = !regex.test(input.value);

  if (regex.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }

  return isEmailError;
};

// kiểm tra phone
checkPhone = (input) => {
  let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  let flag = false;
  input.value = input.value.trim();

  let isPhoneError = !vnf_regex.test(input.value);
  if (vnf_regex.test(input.value) == false) {
    showSuccess(input);
  } else {
    showError(input, "Phone Invalid");
  }

  return isPhoneError;
};

checkLenghtError = (input, min, max) => {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Phai nhập ít nhất ${min} ký tự`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Không được vượt ${max} ký tự`);
    return true;
  }

  //   showSuccess(input);
  return false;
};

let users = [];

// Hàm thêm các khách hàng
const addUser = () => {
  //to stop the form submitting
  let user = {
    id: Date.now(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    city: city,
    state: state,
  };

  // thêm vào mảng
  users.push(user);

  // show
  console.warn("added", { users });

  //lưu vào localStorage
  localStorage.setItem("MyUserList", JSON.stringify(users));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    firstName,
    lastName,
    email,
    phoneNumber,
    city,
    state,
  ]);
  let isEmailError = checkEmail(email);
  let isPhoneError = checkPhone(phoneNumber);
  let ischeckFirstError = checkLenghtError(firstName, 3, 10);
  let ischeckLastError = checkLenghtError(lastName, 3, 10);

  if (
    !isEmptyError ||
    !isEmailError ||
    !isPhoneError ||
    !ischeckFirstError ||
    !ischeckLastError
  ) {
    addUser();
  }
});
