
import axios from "../api/axios.js";

const $result = document.querySelector("#result");
const $pencilName = document.querySelector(".pencil-name");
const $pencilEmail = document.querySelector(".pencil-email");
const $userNameShow = document.querySelector(".name-show");
const $userNameUpdate = document.querySelector(".name-update");
const $userEmailShow = document.querySelector(".email-show");
const $userEmailUpdate = document.querySelector(".email-update");
const $userName = document.querySelector(".user-name");
const $userEmail = document.querySelector(".user-email");
const $nameInput = document.querySelector(".user-name-value");
const $emailInput = document.querySelector(".user-email-value");
const $nameUpdateBtn = document.querySelector(".name-update-btn");
const $emailUpdateBtn = document.querySelector(".email-update-btn");

let userId; 

export const renderUser = (data) => {
    console.log(data);
    $userName.innerText = data.name;
    $userEmail.innerText = data.email;
    $nameInput.value = data.name;
    $emailInput.value = data.email;
    userId = data._id; 
    console.log(userId);
};

const updateUser = async (newData) => {
    try {
        const response = await axios(`/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        if (!response.ok) {
            throw new Error('Failed to update user data');
        }

        const updatedData = await response.json();
        renderUser(updatedData);
    } catch (error) {
        console.error('Error updating user data:', error.message);
    }
};

$pencilName.addEventListener("click", () => {
    $userNameUpdate.classList.add("show");
    $userNameShow.classList.add("hide");
});

$pencilEmail.addEventListener("click", () => {
    $userEmailUpdate.classList.add("show");
    $userEmailShow.classList.add("hide");
});

$nameUpdateBtn.addEventListener("click", () => {
    const newData = {
        name: $nameInput.value,
    };
    updateUser(newData);
    $userNameUpdate.classList.remove("show");
    $userNameShow.classList.remove("hide");
});

$emailUpdateBtn.addEventListener("click", () => {
    const newData = {
        email: $emailInput.value,
    };
    updateUser(newData);
    $userEmailUpdate.classList.remove("show");
    $userEmailShow.classList.remove("hide");
});
