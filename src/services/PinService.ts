import { IPin } from "@/interfaces";
import axios from "./axios";


export default {
    create(data:IPin) {
        return axios.post('/pins', data).then(r => r.data)
    },
    getListByAuthorId(userId:string) {
        return axios.post(`/pins/users/${userId}`).then(r => r.data)
    },
};