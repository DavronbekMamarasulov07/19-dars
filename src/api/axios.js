const instance = axios.create({
    baseURL: "http://localhost:7777",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
    },
    body:{
        
    },
    timeout: 10000
})

export default instance
