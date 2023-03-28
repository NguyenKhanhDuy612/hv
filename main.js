// {
//   let menu__mobile = document.querySelector(".menu__mobile");
//   let menu__mobileShow = document.querySelector(".menu__header--mobile");
//   let close__menu = document.querySelector(".close");

//   function myShowMenu() {
//     menu__mobileShow.style.display = "block";
//   }

//   close__menu.addEventListener("click", myHideMenu);

//   function myHideMenu() {
//     menu__mobileShow.style.display = "none";
//     //   console.log("close");
//   }
//   menu__mobile.addEventListener("click", myShowMenu);
// }

// // slider swiper

// //
{
  // error input
  const errorInput = () => {
    // document.getElementsByClassName("info__input")[0].style.border = "1px solid red";
    // document.getElementsByClassName("info__input")[1].style.border = "1px solid red";
    // document.getElementsByClassName("info__input")[2].style.border = "1px solid red";
    // document.getElementsByClassName("info__input")[3].style.border = "1px solid red";
    // document.getElementsByClassName("info__input")[4].style.border = "1px solid red";
    // document.getElementsByClassName("info__input")[5].style.border = "1px solid red";
    // document.getElementsByClassName("info__input")[6].style.border = "1px solid red";
  };
  // submit form

  let clickSubmit = document.getElementById("clickSubmit");

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phoneNumber");
  let city = document.getElementById("city");
  let state = document.getElementById("state");

  // Mảng lưu các khách hàng
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

  // click để thêm user
  // clickSubmit.addEventListener("submit", addUser);

  // Kieemr tra roongx

  checkValue = () => {
    let inputElements = document.querySelectorAll("#clickSubmit input");
    let flag = false;
    for (let i = 0; i < inputElements.length; i++) {
      // && inputElements[i].name
      // console.log("inputElements[i]", inputElements[i].value);
      if (inputElements[i].value == "") {
        flag = true;
        document.getElementsByClassName("info__input")[i].style.border =
          "1px solid red";
        document.getElementsByClassName("error")[i].style.display = "block";
      } else {
        document.getElementsByClassName("error")[i].style.display = "none";
        document.getElementsByClassName("info__input")[i].style.border = "none";
      }
    }
  };

  checkEmail = () => {
    const mailformat =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (email.value.match(mailformat) == false) {
      flag = true;
      document.getElementsByClassName("info__input")[2].style.border =
        "1px solid red";
      document.getElementsByClassName("errorPhone")[0].style.display = "block";
    } else {
      document.getElementsByClassName("info__input")[2].style.border = "none";
      document.getElementsByClassName("errorPhone")[0].style.display = "none";
    }
  };

  checkPhone = () => {
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let flag = false;
    if (vnf_regex.test(phoneNumber.value) == false) {
      flag = true;
      document.getElementsByClassName("info__input")[3].style.border =
        "1px solid red";
      document.getElementsByClassName("errorPhone")[0].style.display = "block";
    } else {
      document.getElementsByClassName("info__input")[3].style.border = "none";
      document.getElementsByClassName("errorPhone")[0].style.display = "none";
    }
  };
  // // Hàm kiểm tra
  // checkForm = (e) => {

  //   // điều kiện phone
  //   // điều kiện mail
  //   // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   // lấy tất cả input trong form

  //   // check errors

  //   //
  //   let flag = false; // biến kiểm tra

  //   // Kiểm tra rỗng

  //   // Kiểm tra mail hợp lệ
  //   // duy.nguyen.k@gmail.com
  //   if (flag != true) {

  //   }
  //   // Kiểm tra số điện thoại hợp lệ
  //   if (flag != true) {

  //   }

  //   // Nếu tất cả hợp lệ thì thêm vào mảng
  //   if (flag != true) {
  //     addUser();
  //   }
  // };

  // nhấn vào nút submit
  clickSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    let isCheckValue = checkValue();
    let ischeckEmail = checkEmail();
    let ischeckPhone = checkPhone();
console.log(isCheckValue,isCheckValue,isCheckValue);

    if (isCheckValue || ischeckEmail || ischeckPhone) {
      addUser();
    } else {
     alert("Looix")
    }
    // if (!isCheckValue) {
    //   checkPhone();
    // }
  });
}
