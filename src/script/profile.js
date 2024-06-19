
import axios from "../api/axios.js";

let userid;

const loadProfileData = async () => {
    try {
        const response = await axios("/users/profile");
        const userData = response.data;

        renderUser(userData);
    } catch (error) {
        console.log(error);
    }
};

const renderUser = (userData) => {
    const $userName = document.querySelector(".user-name");
    const $userEmail = document.querySelector(".user-email");
    const $userNameValue = document.querySelector(".user-name-value");
    const $userEmailValue = document.querySelector(".user-email-value");

    $userName.innerText = userData.name;
    $userEmail.innerText = userData.email;
    $userNameValue.value = userData.name;
    $userEmailValue.value = userData.email;
    userid = userData._id;
    console.log(userid);
};

const $pencilName = document.querySelector(".pencil-name");
$pencilName.addEventListener("click", (event) => {
    event.preventDefault();

    const $userNameUpdate = document.querySelector(".name-update");
    const $userNameShow = document.querySelector(".name-show");
    $userNameUpdate.classList.add("show");
    $userNameShow.classList.add("hide");
});

const $pencilEmail = document.querySelector(".pencil-email");
$pencilEmail.addEventListener("click", (event) => {
    event.preventDefault();

    const $userEmailUpdate = document.querySelector(".email-update");
    const $userEmailShow = document.querySelector(".email-show");
    $userEmailUpdate.classList.add("show");
    $userEmailShow.classList.add("hide");
});

const $nameUpdateBtn = document.querySelector(".name-update-btn");
$nameUpdateBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const $userNameUpdate = document.querySelector(".name-update");
    const $userNameShow = document.querySelector(".name-show");
    $userNameUpdate.classList.remove("show");
    $userNameShow.classList.remove("hide");

    const userId = userid;
    const newName = document.querySelector(".user-name-value").value;
    const newData = { name: newName };

    await updateUser(userId, newData);
});

const $emailUpdateBtn = document.querySelector(".email-update-btn");
$emailUpdateBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const $userEmailUpdate = document.querySelector(".email-update");
    const $userEmailShow = document.querySelector(".email-show");
    $userEmailUpdate.classList.remove("show");
    $userEmailShow.classList.remove("hide");

    const userId = userid;
    const newEmail = document.querySelector(".user-email-value").value;
    const newData = { email: newEmail };

    await updateUser(userId, newData);
});

const updateUser = async (userId, newData) => {
    try {
        const response = await axios.put(`/users/profile`, newData);
        console.log("User updated successfully:", response.data);
    } catch (error) {
        console.error("Error updating user:", error);
    }
};

loadProfileData();
