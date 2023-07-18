import axios from 'axios';

export const client = axios.create({
    baseUrl : "https://reqres.in/api/",
});