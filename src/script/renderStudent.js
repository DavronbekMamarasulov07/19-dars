import axios from "../api/axios.js"


const $studentTbody = document.querySelector("#student-tbody")
console.log($studentTbody);

class ApiData{
    constructor(){
        this.getUsers = async function (endpoint){
            try {
                let response =  await axios(endpoint)
                return response.data
            } catch (error) {
                console.log(error);
            }
        }
    }
}

class Render{
    constructor(){
        this.renderData = async function(data){
            let res =  await data;
            res.students.map(user => {
                const $tr = document.createElement("tr");
                $tr.className = "student-tr"
                $tr.innerHTML = `
                    <td class="student-name">${user.name}</td>
                    <td class="student-address">${user.address}</td>
                    <td class="student-category">${user.category}</td>
                    <td class="student-city">${user.city}</td>
                    <td class="student-contact">${user.contact}</td>
                    <td class="student-fatherContact">${user.fatherContact}</td>
                    <td class="student-image"><img src="${user.image}" /></td>
                    <td class="student-roomNo">${user.roomNo}</td>
                    <td class="student-blockNo">${user.blockNo}</td>
                    <td class="student-status">${user.status}</td>
                `
                
                $studentTbody.appendChild($tr)
            })
            console.log(data)
        }
    }
}

const render  = new Render() 

const apiData = new ApiData();

render.renderData(apiData.getUsers("/student/all"));