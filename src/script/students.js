import axios from "../api/axios.js";


const $addStudentBtn = document.querySelector("#add-student")
const $addStudentForm = document.querySelector("#add-student-form")
const $formBtn = document.querySelector("#form-btn")
const $studentTable = document.querySelector("#students-table")


const $studentName = $addStudentForm.querySelector("#student-name")
const $studentAddress = $addStudentForm.querySelector("#student-address")
const $studentCategory = $addStudentForm.querySelector("#student-category")
const $studentCity = $addStudentForm.querySelector("#student-city")
const $studentContact = $addStudentForm.querySelector("#student-contact")
const $studentFatherContact = $addStudentForm.querySelector("#student-fatherContact")
const $studentImage = $addStudentForm.querySelector("#student-image")
const $studentRoomNo = $addStudentForm.querySelector("#student-roomNo")
const $studentBlockNo = $addStudentForm.querySelector("#student-blockNo")
const $studentStatus = $addStudentForm.querySelector("#student-status")



function StudentInfo(name,address,category,city,contact,fathercontact,image,roomNo,blockNo,status){
    this.name = name,
    this.address = address,
    this.category = category,
    this.city = city,
    this.contact = contact,
    this.fatherContact = fathercontact,
    this.image = image,
    this.roomNo = roomNo,
    this.blockNo = blockNo,
    this.status = status
}

const studentInfo = async (e) => {
    e.preventDefault()


    const student = new StudentInfo($studentName.value,$studentAddress.value,$studentCategory.value,$studentCity.value,$studentContact.value,$studentFatherContact.value,$studentImage.value,$studentRoomNo.value,$studentBlockNo.value,$studentStatus.value)

    console.log(student);

    try {
        const response = await axios.post("/student/addStudent", student)
        const data =  response.data
        if(data){
            location.reload()
        }

    } catch (error) {
        console.log(error);
    }


}

$addStudentForm.addEventListener("submit", studentInfo)

$addStudentBtn.addEventListener("click" , () => {
    $addStudentForm.classList.add("show")
    $addStudentBtn.classList.add("hide")
    $studentTable.classList.add("hide")
})

$formBtn.addEventListener("click",  () => {
    $addStudentForm.classList.remove("show")
    $addStudentBtn.classList.remove("hide")
    $studentTable.classList.remove("hide")
});