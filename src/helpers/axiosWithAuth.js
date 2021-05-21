import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: JSON.parse(window.localStorage.getItem("token")),
        },
        baseURL: "http://localhost:5000",
    });
};
//Task List:
//Build and export a function used to send in our authorization token