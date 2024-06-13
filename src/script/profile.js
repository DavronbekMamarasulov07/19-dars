import axios from "../api/axios.js";
// import { handleLoading } from "../utils/index.js";
import { renderUser } from "./render.js";



// const $container = document.querySelector("#container");

const loadProfileData = async () => {
    
    try{
        // handleLoading(true, $container)
        const response = await axios("/users/profile");
        console.log(response.data);
        renderUser(response.data);
    }
    catch(error){
        console.log(error)
    }
    finally{
        // handleLoading(false, $container)
    }
}

loadProfileData();


