let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let city = document.getElementById("city");
let state = document.getElementById("state");

let form = document.getElementById("form");

// check rỗng
showError = (input, message) => {
  //   console.log("input.parentElement", input.parentElement);
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
      isEmptyError = true;
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
  //   console.log("isMailError", regex.test(input.value));
  if (regex.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }

  return isEmailError;
};

// kiểm tra phone
checkPhone = (input) => {
  let vnf_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  input.value = input.value.trim();

  let isPhoneError = !vnf_regex.test(input.value);
  console.log("isPhoneError", vnf_regex.test(input.value));
  if (vnf_regex.test(input.value)) {
    showSuccess(input);
    // alert("đúng");
  } else {
    showError(input, "Phone Invalid");
  }

  return isPhoneError;
};

checkLenghtError = (input, min, max) => {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Enter at least ${min} characters`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Must not exceed  ${max} characters`);
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
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    city: city.value,
    state: state.value,
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

  let isEmptyError = checkEmptyError([firstName, lastName, email, phoneNumber]);
  if (!isEmptyError) {
    let isEmailError = checkEmail(email);
    if (!isEmailError) {
        let isPhoneError = checkPhone(phoneNumber);
        if (!isPhoneError) {
            let ischeckFirstError = checkLenghtError(firstName, 3, 10);
            let ischeckLastError = checkLenghtError(lastName, 3, 10);
            if (!ischeckFirstError && !ischeckLastError) {
                addUser();
            }
        }
    }
  }

  
  
//   let ischeckLastError = checkLenghtError(lastName, 3, 10);
//   //   console.log("checkEmptyError", checkEmptyError([firstName]));

//   //   console.log("checkEmail", checkEmail(email));
//   //   console.log("checkPhone", checkPhone(phoneNumber));
//   //   console.log("checkLenghtError", checkLenghtError(firstName, 3, 10));

//   if (!isEmptyError && !isEmailError && !isPhoneError) {
//     addUser();
//   }
});
